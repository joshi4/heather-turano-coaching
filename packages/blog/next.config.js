module.exports = {
  env: {
    GHOST_API_KEY: "fb325f3182dc0b7734cd7dd3dc",
    CONTENTFUL_SPACE_ID: "acdm2953uods",
    CONTENTFUL_ACCESS_TOKEN: "PbE69xLIh6rZmX_YwlQLxhnnIGWcbfuM5xvtgSJzpDY"
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    /**
     * SVGR
     * https://github.com/gregberge/svgr/tree/master/packages/webpack
     */
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false
          }
        },
        "url-loader"
      ]
    });
    config.module.rules.push({
      test: /\.(png|jpg|jpeg)$/,
      use: ["url-loader"]
    });
    return config;
  }
};
