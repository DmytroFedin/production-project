import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { BuildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildloaders = (props: BuildOptions): webpack.RuleSetRule[] => {
  const {
    isDev,
  } = props;

  const codeBabelLoader = buildBabelLoader({ ...props, isTsx: false });
  const codeTsxBabelLoader = buildBabelLoader({ ...props, isTsx: true });

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

  return [
    assetsLoader,
    svgLoader,
    codeBabelLoader,
    codeTsxBabelLoader,
    cssLoader,
  ];
};
