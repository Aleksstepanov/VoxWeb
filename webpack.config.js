const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const isProv = !isDev
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpack = require('webpack');
module.exports = {
    context : path.resolve(__dirname, 'src'),
    entry : {
        index : './js/entry/index.js'
        
    },
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist'),
        publicPath : '/dist'
    },
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        port : 4200,
        hot : isDev,
        //publicPath: 'http://localhost:4200/assets/',
        watchOptions: {
            poll: true
          }
    },
    resolve : {
        alias : {
            '@' : path.resolve(__dirname, 'src/blocks')
        }
    },
    optimization : {
        splitChunks : {
            chunks : 'all'
        }
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {//scss
                test : /\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            hmr : isDev,
                            reloadAll : true
                        }
                    },
                    {
                        loader : 'css-loader'
                    },
                    {
                        loader : 'postcss-loader',
                        options: { config: {path: 'src/js/postcss.config.js' } }
                    },
                    {
                        loader : 'sass-loader'
                    }

                ]
            },
            {//css
                test : /\.css$/,
                use : [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader : 'css-loader'
                    },
                    {
                        loader : 'postcss-loader',
                        options: { config: { path: 'src/js/postcss.config.js' } }
                    }

                ]
            },
            {//image
                test : /\.(gif|img|png|jpg|jpeg|svg)$/,
                exclude : [/fonts/],
                loader : 'file-loader',
                options : {
                    name : '[name].[ext]'
                }
            },
            {//fonts
                test : /\.(eot|ttf|woff|woff2|otf|svg)/,
                loader : 'file-loader',
                exclude : [/image/],
                options : {
                  name : 'dist/assets/fonts/[name].[ext]'
                }
            },
            {//pug
                test : /\.pug$/,
								loader : 'pug-loader',
								options : {
									minify : false
								}
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : 'css/[name].css'
        }),
        new HtmlWebpackPlugin(
            {
						hash : false,
						minify : false,
            template : './pages/index.pug',
            filename : 'index.html',
            minify : {
                collapseWhitespace : isProv
            },
            hmr : true,
            reloadAll : true
            }
        ),
        new CopyWebpackPlugin(
            [
                {
                    from: path.join(__dirname, 'src', 'assets', 'img'),
                    to: path.join(__dirname, 'dist', 'assets', 'img')
                },
                {
                    from: path.join(__dirname, 'src', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular100'),
                    to: path.join(__dirname, 'dist', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular100')
                },
                {
                  from: path.join(__dirname, 'src', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular300'),
                  to: path.join(__dirname, 'dist', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular300')
                },
                {
                  from: path.join(__dirname, 'src', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular500'),
                  to: path.join(__dirname, 'dist', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular500')
                },
                {
                  from: path.join(__dirname, 'src', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular700'),
                  to: path.join(__dirname, 'dist', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular700')
                },
                {
                  from: path.join(__dirname, 'src', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular900'),
                  to: path.join(__dirname, 'dist', 'assets', 'fonts', 'Museo Sans Cyrl', 'MuseoSansCyrlRegular900')
                }

            ]
        ),
        new webpack.ProvidePlugin({
            Vue: 'vue',
            vue: 'vue',

          })
        //new CleanWebpackPlugin (),



    ]
}
