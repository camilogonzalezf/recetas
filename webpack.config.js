const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: `${__dirname}/src/index.js`,
    output:{
        path: `${__dirname}/recetas`,
         publicPath:'/recetas/',
        filename: 'bundle.js',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [

      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'public/index.html'
      }),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: '404.html',
        template: 'public/404.html'
      }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        },)
    ],
    devServer: {
        historyApiFallback: {
        rewrites: [{ from: /\/recetas\/[^?]/, to: '/404.html' }],
      },
    }

}