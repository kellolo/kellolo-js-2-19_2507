const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // entry: {
    //     //точка входа если путь отличается от 'src/index.js'
    // },
    // output: {
    //     // изменение собранного js-файла
    // },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
        ]
    },
    plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[id].css'
            }),
            new CopyPlugin({
                patterns: [
                  { from: 'src/assets/img', to: 'img' },
            
                ],
              }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
    ]
}