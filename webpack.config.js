module.exports = {
  entry: './app/coreApp.js',
  output: {
    path: './public/javascripts',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};