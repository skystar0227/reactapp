import HtmlWebpackPlugin from 'html-webpack-plugin';
import {resolve} from 'path';

const absolute = (...nodes) => resolve(__dirname, ...nodes);

export default (env, args) => ({
  context: absolute('src'),
  entry: './index.tsx',
  output: {
    path: absolute(args.mode === 'production' ? 'dist' : 'devel'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(^|\/)node_modules\//,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({title: 'reactapp'})],
});
