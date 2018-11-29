const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
/*

*/

const boot = [
    //vendors
    './scripts/vendors/angular.min.js',
    './scripts/vendors/angular-route.min.js',
    './scripts/vendors/angular-long-press.js',

    //models
    './scripts/models/api.js',
    './scripts/models/noty.js',

    './scripts/app.js',
];


module.exports = {
    entry: {
        boot,
        bootpatch: [
            './scripts/init.js',
            './scripts/directives.js',
            './scripts/controllers/main-tile-board.js',
            './scripts/controllers/main.js',
            './scripts/controllers/noty.js',
            './scripts/controllers/screensaver.js',
        ],
        styles: [
            './styles/bundle.less',
        ]
    },

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].min.js'
	},
	
	module: {
        rules: [{
            test: /\.html$/,
            use: ['raw-loader']
        }, {
            test: /\.js$/,
            include:  path.resolve(__dirname, 'scripts'),
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, 'styles'),
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    },
                },
                "less-loader"
            ]
        }, {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: "url-loader"
        }]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./styles/[name].css"
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                html5: true,
                removeComments: true,
                removeEmptyAttributes: true,
                minifyCSS: true,
                minimize: false,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: 'favicon.png',
                toType: 'file'
            }, {
                from: 'configs',
                to: 'configs',
                toType: 'dir'
            }, {
                from: 'scripts/custom_scripts',
                to: 'scripts/custom_scripts',
                toType: 'dir'
            }, {
                from: 'images',
                to: 'images',
                toType: 'dir'
            }, {
                from: './node_modules/@mdi/font/css/materialdesignicons.min.css',
                to: 'styles/plugins',
                toType: 'dir'
            }, {
                from: './node_modules/@mdi/font/fonts',
                to: 'styles/fonts',
                toType: 'dir'
            }, {
                from: './templates',
                to: 'templates',
                toType: 'dir'
            }
        ])
    ]
};