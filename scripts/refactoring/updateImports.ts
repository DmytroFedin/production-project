import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer) => value.startsWith(layer));
};

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach((impotDeclaration) => {
    const value = impotDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      impotDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
