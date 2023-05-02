import path from 'path';
import { Project } from 'ts-morph';

interface ExportedDeclarations<T> {
  name: Array<T>;
  path: string;
}

const project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

export const PROJECT_LAYERS = ['app', 'entities', 'features', 'shared', 'pages', 'widgets'];

const isAbsolute = (path: string) => PROJECT_LAYERS.some((layer) => path.startsWith(layer));

const checkPaths = (
  resultArray: ExportedDeclarations<string>[],
  modulePath: string,
  name: string,
) => {
  if (resultArray.length > 0) {
    resultArray.forEach((item) => {
      if (modulePath === item.path) {
        item.name.push(name);
      }
    });
  }
};

const files = project.getSourceFiles();
const indexFilename = 'index.ts';
const layer = process.argv[2] || 'shared';
const slice = 'ui';
const dest = project.getDirectory(path.resolve(__dirname, '..', '..', 'src', layer, slice));
const directories = dest?.getDirectories();

directories?.forEach((directory) => {
  const folderName = directory.getPath();
  const isIndexFileExist = directory.getSourceFile(`${folderName}/${indexFilename}`);

  if (!isIndexFileExist) {
    const filesInFolder = directory.getSourceFiles([
      '**/*.tsx',
      '!**/*.stories.tsx',
      '!**/*.test.tsx',
    ]);

    let content = '';

    filesInFolder?.forEach((component) => {
      const exportedInterfaces: ExportedDeclarations<string>[] = [];
      const interfaces = component.getInterfaces();
      const exports = component.getExportedDeclarations();
      const names = Array.from(exports.keys());
      const exportedValues: ExportedDeclarations<string>[] = [];
      const folderLen = folderName.length;
      const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`;
      interfaces.forEach((item) => {
        if (item.isExported()) {
          const name = (item.getName());
          checkPaths(exportedInterfaces, modulePath, name);
          exportedInterfaces.push({ name: [name], path: modulePath });
        }
      });
      if (exportedInterfaces[0]) {
        content += `export type { ${exportedInterfaces[0].name} } from "${modulePath}"\n`;
      }

      const difference = names.filter((x) => !exportedInterfaces[0]?.name.includes(x));

      difference.forEach((name) => {
        checkPaths(exportedValues, modulePath, name);
        exportedValues.push({ name: [name], path: modulePath });
      });
      if (exportedValues[0]) {
        content += `export { ${exportedValues[0].name} } from "${modulePath}"\n`;
      }
    });

    const file = directory.createSourceFile(
      `${folderName}/${indexFilename}`,
      content,
      { overwrite: true },
    );

    file.save().then(() => console.log(`${folderName} --> index.ts created!`));
  }
});

files.forEach((source) => {
  const declarations = source.getImportDeclarations();
  declarations.forEach((declaration) => {
    let value = declaration.getModuleSpecifierValue();
    value = value.replace('@/', '');
    const segments = value.split('/');

    const isLayer = segments?.[0] === layer;
    const isSlice = segments?.[1] === slice;

    if (isAbsolute(value) && isLayer && isSlice) {
      const res = value.split('/').slice(0, 3).join('/');
      declaration.setModuleSpecifier(`@/${res}`);
    }
  });
});

project.save();
