import webpack from 'webpack';
import { BuildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildloaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ua', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const assetsLoader = {
    test: /\.(png|jpe?g|giff|woff2|woff)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = BuildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    assetsLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
};
