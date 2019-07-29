const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry:[
        '@babel/polyfill',
        './js/index.js'
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer:{
        contentBase:'./dist',
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./indext.html'
        })
    ],
    optimization: {
        minimize: false
    },
    module:{
        rules:[
            {
                test:/\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|mp3|eot|svg|woff)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
              ],
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                  limit: 50000,
                },
            }
        ]
    }

}