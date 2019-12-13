const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const linaria = require("linaria/rollup");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      linaria({
        sourceMap: process.env.NODE_ENV !== "production"
      }),
      postcss({
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default"
          })
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
        extensions: [".css", ".sss", ".pcss", ".scss"]
      })
    );
    return config;
  }
};
