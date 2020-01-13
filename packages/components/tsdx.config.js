const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup").default;
const rpts2 = require("rollup-plugin-typescript2");

module.exports = {
  rollup(config, options) {
    /**
     * Using this work around until https://github.com/jaredpalmer/tsdx/issues/294
     * is fixed. Workaround borrowed from
     * https://github.com/jaredpalmer/tsdx/issues/294#issuecomment-553658491
     */
    config.plugins = config.plugins.map(plugin => {
      if (plugin && plugin.name === "rpt2") {
        return rpts2({
          // properties that I added for demonstration purposes
          clean: true,
          objectHashIgnoreUnknownHack: true,
          // properties in the current internal implementation of tsdx
          typescript: require("typescript"),
          cacheRoot: `./.rts2_cache_${options.format}`,
          tsconfig: options.tsconfig,
          tsconfigDefaults: {
            compilerOptions: {
              sourceMap: true,
              declaration: true,
              jsx: "react"
            }
          },
          tsconfigOverride: {
            compilerOptions: {
              target: "esnext"
            }
          }
        });
      }

      return plugin;
    });

    config.plugins.push(url());
    config.plugins.push(svgr());
    return config;
  }
};
