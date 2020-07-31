const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

console.log('entried');

module.exports = {
    // entry: {
    //     // точка входа (если нужно использовать путь отличный от "src/index.js")
    // },
    // output: {
    //     // изменения собранного js-файла
    // },
    module: {
        rules: [
            // правила обработки вебпаком разных типов файлов
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        // настройки плагина
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/imgs', to: 'assets/img'},
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
};