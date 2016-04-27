// Modules
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig (options) {

  /**
   * Environment type
   * BUILD is for generating minified builds
   * TEST is for generating test builds
   */
  var BUILD = !!options.BUILD;
  var TEST = !!options.TEST;


  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  config.context = __dirname + '/';
  
  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  if (TEST) {
    config.entry = {};
  } else {
    config.entry = {
      app: './app/index.js'
    };
  }

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  if (TEST) {
    config.output = {};
  } else {
    config.output = {
      // Absolute output directory
      path: '../public/',

      // Output path from the view of the page
      // Uses webpack-dev-server in development
      publicPath: BUILD ? '/' : 'http://localhost:8080/',

      // Filename for entry points
      // Only adds hash in build mode
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

      // Filename for non-entry points
      // Only adds hash in build mode
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    };
  }

   /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (TEST) {
    config.devtool = 'inline-source-map';
  } else if (BUILD) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }


  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [
        { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
        { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
        { test: /\.jpg$/, loader: 'file-loader' },
        
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml?limit=1024&name=image/[name].[ext]"
        }
    ]
  };

  // CSS LOADER
  // Reference: https://github.com/webpack/css-loader
  // Allow loading css through js
  //
  // Reference: https://github.com/postcss/postcss-loader
  // Postprocess your css with PostCSS plugins
  var cssLoader = {
    test: /\.css$/,
    loader: 'style-loader!css-loader?limit=1024&name=css/[name].[ext]'
  };
  
  var sassLoader = {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
          'style?sourceMap',
          '!css!resolve-url!sass?sourceMap!'
    )
  };

  // Skip loading css in test mode
  if (TEST) {
    // Reference: https://github.com/webpack/null-loader
    // Return an empty module
    cssLoader.loader = 'null';
    sassLoader.loader = 'null';
  }

  // Add cssLoader to the loader list
  config.module.loaders.push(cssLoader);

  // ISPARTA LOADER
  // Reference: https://github.com/ColCh/isparta-instrumenter-loader
  // Instrument JS files with Isparta for subsequent code coverage reporting
  // Skips node_modules and files that end with .test.js
  if (TEST) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /tests.webpack\.js/,
        /\.test\.js$/
      ],
      loader: 'isparta-instrumenter'
    });
  }


  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Reference: https://github.com/webpack/extract-text-webpack-plugin
    // Extract css files
    // Disabled when in test mode or not in build mode
    new ExtractTextPlugin('[name].[hash].css', {
      disable: !BUILD || TEST
    })
  ];



  // Skip rendering index.html in test mode
  if (!TEST) {
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './app/index.html',
        inject: 'body',
        minify: false
      })
    );
  }

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin()
    );
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './dist',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  };

  return config;
};
