module.exports = {
  env: {
    GHOST_API_KEY: "fb325f3182dc0b7734cd7dd3dc"
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
    return config;
  }
};
