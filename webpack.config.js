const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const APP_NAME = '/./';

module.exports = (env) => {
    const currentEnivronment = env.NODE_ENV || env.nodeEnv; // почему-то devServer и обычная сборка по-разному прокидывают аргументы

    const isProduction = currentEnivronment === 'production';

    const publicPath = isProduction ? APP_NAME : '/';
    console.log('Public path:', publicPath);
    console.log('cli env: ', env);

    const devtool = isProduction ? false : 'eval-cheap-module-source-map'; // false или строка по шаблону
    const productionPlugins = [];
    console.log('Is Production?', isProduction);
    if (isProduction) {
        productionPlugins.push(new MiniCssExtractPlugin());
    }

    const cssRule = {
        test: /\.css$/,
        use: [
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    };

    if (isProduction) {
        cssRule.use.splice(0, 0, MiniCssExtractPlugin.loader);
    }

    const scssRule = {
        test: /\.(scss|module.(scss))$/,
        exclude: /\.$/,
        use: [
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: !isProduction,
                },
            },
        ],
    };

    scssRule.use.splice(0, 0, isProduction ? MiniCssExtractPlugin.loader : 'style-loader');

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: publicPath, // этот путь будет добавляться в пути до каждого бандла внутри html и других бандлов
            filename: 'js/[name].[fullhash].bundle.js',
            chunkFilename: 'js/[name].[fullhash].bundle.js',
        },
        devtool,
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            sourceMap: !isProduction,
                        },
                    },
                },
                cssRule,
                scssRule,
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        devServer: {
            port: 3000,
            compress: true,
            hot: true,
            historyApiFallback: true,
        },
        plugins: [
            new CleanWebpackPlugin(),
            ...productionPlugins,
            new Dotenv({ path: `.env.${currentEnivronment}`, publicPath }),
            new CopyPlugin({
                patterns: [{ from: 'public', to: 'public' }],
            }),
            new HtmlWebpackPlugin({ template: './public/index.html', filename: 'index.html', inject: 'body' }),
        ],
    };
};
