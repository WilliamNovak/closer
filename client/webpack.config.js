const { resolve } = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = [
    {
        test: /\.es6$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
            presets: ['react', 'env'],
            plugins: [
                'transform-object-rest-spread', 'transform-es2015-arrow-functions', 'transform-class-properties'
            ]
        },
        include: resolve(__dirname, 'src')
    },
    {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
            presets: ['react', 'env'],
            plugins: [
                'transform-object-rest-spread', 'transform-es2015-arrow-functions', 'transform-class-properties'
            ]
        }
    },
    {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }
            ]
        })
    },
    {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader!sass-loader', options: { minimize: true } }
            ]
        })
    },
    {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        loaders: [
            "file-loader?context=public&name=./dist/[path][name].[ext]"
        ]
    },
    {
        test: /\.html$/,
        loader: 'html-loader'
    },
    {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
    }
]
