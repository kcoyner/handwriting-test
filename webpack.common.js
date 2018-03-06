const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

//const entryApp = process.env.HOT ? ['react-hot-loader/patch', './src/index.jsx', 'webpack-hot-middleware/src'] : ['react-hot-loader/patch', './src/index.jsx'];

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react']
          }
        }
      },
      {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader',
      query: {
        interpolate: 'require'
      }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
  //title: 'Shopping',
       //   inject: false,
      template: './index.html',
    })
  ],
}