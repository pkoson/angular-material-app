var webpackConfig = require('./webpack.test');
webpackConfig.entry = {}

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .test.
      './tests.webpack.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using Chrome
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'text', subdir: '.', file: 'coverage-report.txt' },
        { type: 'html', subdir: 'report-html' }
      ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
};