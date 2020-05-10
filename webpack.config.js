const path = require('path')
const mode = process.env.NODE_ENV
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
module.exports = {
    devServer: {
      publicPath: '/build/',
      proxy: {
        '/callback': 'http://localhost:3000',
        '/api': 'http://localhost:3000',
        '/verify':'http://localhost:3000'
      },
      port: 8080,
      hot: true,
    },
    entry: ['./client/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },
    mode,
    plugins: [ new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin() ],
    module: {
        rules: [
             { 
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
              loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env','@babel/preset-react']
              } 
              }
            },
            
             {
              test: /\.s[ac]ss$/i,
              use: [
        
                // Creates `style` nodes from JS strings
                //'style-loader',
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
              }
        ]
    }
  };