const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js",
publicPath: "/"
},
mode: "development",
resolve: {
extensions: [".js", ".jsx"],
alias: {
    '@components': path.resolve(__dirname, 'src/components/'),
    '@containers': path.resolve(__dirname, 'src/containers/'),
    '@styles': path.resolve(__dirname, 'src/styles/'),
    '@icons': path.resolve(__dirname, 'src/assets/icons/'),
    '@logos': path.resolve(__dirname, 'src/assets/logos/'),
    '@pages': path.resolve(__dirname, 'src/pages/'),
    '@hooks': path.resolve(__dirname, 'src/hooks/'),
    '@context': path.resolve(__dirname, 'src/context/'),
},
},
module: {
rules: [
    {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
    },
    },
    {
    test: /\.html$/,
    use: [
        {
        loader: "html-loader",
        },
    ],
    },
{
    test: /\.(css|scss)$/,
    use: [
        "style-loader",
        "css-loader",
        "sass-loader",
    ]
},

    {
        test: /\.(png|jpg|svg|jpeg|webp)$/,
        type: 'asset',
    }, 

],
},
plugins: [
new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
}),
],
devServer:{
    static: path.join(__dirname, 'dist'),
    compress:true,
    historyApiFallback: true,
    port:3005,
}
};