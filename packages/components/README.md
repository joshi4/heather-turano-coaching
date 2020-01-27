## todo

- [ ] Replace Rollup compiled Sass w. [Linaria](https://linaria.now.sh/)

## Gotchas

- Keep the dependencies there so so the `webpack-node-externals` knows which packages to exclude. Otherwise it can't look up the directory to figure out which packages exist and don't. It's a monorepo thing...
