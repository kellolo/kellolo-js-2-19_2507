const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // entry: {
    //     //точка входа (если нужно использовать путь, отличный от 'src/index.js')
    // },
    // output: {
    //     // изменения собранного js-файла
    // },
    module: {
        rules: [
            //правила обработки вебпаком разных типов файлов
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        //настройки плагинов
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // куда собирать
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: './public/shop.html'
        })
    ]
}