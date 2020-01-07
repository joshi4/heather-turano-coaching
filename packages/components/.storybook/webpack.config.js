const path = require("path");

const storybookTsConfigPath = path.resolve(__dirname, "../tsconfig.json");

module.exports = async ({ config }) => {
  /**
   * Adds the awesome-typescript-loader to load .ts files
   */
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "awesome-typescript-loader",
        options: {
          configFileName: storybookTsConfigPath
        }
      }
    ]
  });

  /**
   * Tells webpack to look for ts and tsx file extensions so
   * we don't have to define file extensions when we import
   * typescript modules
   */
  config.resolve.extensions.push(".ts", ".tsx");

  /**
   * Enables SVGR for storybook which is included by default
   * in Create React App. Allows us to import SVGs and use
   * them as react components
   * (Documentation)[https://www.smooth-code.com/open-source/svgr/docs/webpack/]
   *
   * The below strips out SVG and then uses SVGR to load SVGs
   */
  config.module.rules = config.module.rules.map(rule => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      };
    }

    return rule;
  });
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

  /**
   * Enable Gatsby imported components to work in storybook
   * https://www.gatsbyjs.org/docs/visual-testing-with-storybook/#setting-up-your-environment
   */
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve("babel-loader");
  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ];
  config.module.rules[0].use[0].options.plugins = [
    // use @babel/plugin-proposal-class-properties for class arrow functions
    require.resolve("@babel/plugin-proposal-class-properties"),
    // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    require.resolve("babel-plugin-remove-graphql-queries")
  ];
  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ["browser", "module", "main"];

  return config;
};
