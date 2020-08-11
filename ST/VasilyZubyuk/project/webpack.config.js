const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // entry : {
    //     //точка входа 
    // },
    // output: {
    //     //изменение собранного js файла 
    // },
    module: {
        rules: [
            //правила обработки webpack'ом разных типов файлов
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {url: false}
                    }],
            }
        ]
    },
    plugins: [
        //настройки плагинов
        new MiniCssExtractPlugin({
            filename: 'layout/css/[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets/imgs', to: 'assets/imgs'},
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}