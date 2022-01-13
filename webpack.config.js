const path = require("path"); // Set up the path of the project
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
   },
   mode: "development",
   resolve: {
      extensions: [".js", ".jsx"],
      alias: {
         "@components": path.resolve(__dirname, "src/components"),
         "@containers": path.resolve(__dirname, "src/containers"),
         "@styles": path.resolve(__dirname, "src/styles"),
         "@pages": path.resolve(__dirname, "src/pages"),
         "@routes": path.resolve(__dirname, "src/routes"),
         "@images": path.resolve(__dirname, "src/assets/images"),
         "@icons": path.resolve(__dirname, "src/assets/icons"),
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
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            type: "asset",
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./public/index.html",
         filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
         filename: "[name].css",
      }),
   ],
   devServer: {
      // For development environment
      static: path.join(__dirname, "dist"),
      compress: true,
      historyApiFallback: true,
      // open: true,
      port: 3005,
   },
};
