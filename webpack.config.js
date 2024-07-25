const path = require("path");

module.exports = {
  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  mode: "development",

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 3000,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
