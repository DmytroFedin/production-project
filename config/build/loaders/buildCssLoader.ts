import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const BuildCssLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev ? '[path][name]___[local]' : '[hash:base64:8]',
          exportLocalsConvention: 'camelCase',
        },
      },
    },
    'sass-loader',
  ],
});
