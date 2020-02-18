const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  output: {
    filename: `worker.dev.js`,
    path: path.join(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: []
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};
