const Path = require('path');
const { JavascriptWebpackConfig, CssWebpackConfig } = require('@silverstripe/webpack-config');

const PATHS = {
  ROOT: Path.resolve(),
  SRC: Path.resolve('client/src'),
  ELEMENTAL: Path.resolve('vendor/dnadesign/silverstripe-elemental/client/src'),
};

const config = [
  // main JS bundle
  (() => {
    const jsConfig = new JavascriptWebpackConfig('js', PATHS)
      .setEntry({
        bundle: `${PATHS.SRC}/bundles/bundle.js`,
      })
      .getConfig();

    jsConfig.resolve = jsConfig.resolve || {};
    jsConfig.resolve.alias = jsConfig.resolve.alias || {};
    jsConfig.resolve.alias['elemental'] = PATHS.ELEMENTAL;

    return jsConfig;
  })(),
  // sass to css
  new CssWebpackConfig('css', PATHS)
    .setEntry({
      bundle: `${PATHS.SRC}/styles/bundle.scss`,
    })
    .getConfig(),
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : config;
