const path = require("path");

module.exports = {
  // gatsby
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  // regualr
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]___[hash:base64:5]",
              importLoaders: 3
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
};
