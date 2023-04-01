import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoaader';
import { BuildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildloaders = (props: BuildOptions): webpack.RuleSetRule[] => {
  const {
    isDev,
  } = props;
  const babelLoader = buildBabelLoader(props);

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
