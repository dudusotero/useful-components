/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    devtool: 'source-map',
    entry: './src/client.js',
    output: {
      path: `${__dirname}/dist/public`,
    },
    module: {
      rules: [
        // mini-css-extract-plugin is not meant for SSR. Instead, extract the
        // CSS as part of the client build (or use isomorphic-style-loader).
        // See webpack-contrib/mini-css-extract-plugin#90
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin()],
  },
  {
    target: 'node',
    devtool: 'source-map',
    entry: './src/server.js',
    externals: [
      nodeExternals({
        // Bundle RCS so that css-loader detects its CSS and strips
        // require('./style.css') statements. Otherwise, the build
        // will fail with SyntaxError: Unexpected token . at runtime.
        allowlist: /useful-components\/*$/,
      }),
    ],
    node: {
      // By default, webpack uses the real dirname (src) relative to the context
      // option. If you set it to false, it will use the absolute path to /dist.
      // This is required for express.static to resolve /public properly.
      __dirname: false,
    },
    plugins: [new NodemonPlugin()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
  },
]
