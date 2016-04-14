var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/',
    entry: './app/index.js',
    output: {
      path: __dirname + '/public/javascripts',
      filename: 'bundle.js'
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ],
    module: {
      loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
          { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
          { test: /\.jpg$/, loader: 'file-loader' },
          
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?limit=1024&name=css/[name].[ext]'
          },
          
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                  'style?sourceMap',
                  '!css!resolve-url!sass?sourceMap!'
            )
          },
          
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml?limit=1024&name=image/[name].[ext]"
          }
      ]
    }

}
