import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildloaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {

  const { mode, paths, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildloaders(options)
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(options): undefined
  };
}