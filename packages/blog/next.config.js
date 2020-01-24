require("dotenv").config();

module.exports = {
  env: {
    GHOST_API_KEY: process.env.NEXT_GHOST_API_KEY,
    CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN
  },
  generateBuildId: async () => {
    return require("./package.json").version;
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
