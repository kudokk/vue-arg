const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,

  entry: {
    'main': path.resolve(__dirname, './src/main.js')
  },

  output: {
    path: `${__dirname}/dist/js/`,
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: [
              { loader: 'vue-style-loader' },
              {
                loader: 'css-loader',
                options: { minimize: process.env.NODE_ENV === 'production' }
              },
              {
                loader: 'sass-loader',
                options: { indentedSyntax: true }
              }
            ],
            js: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'none'

}
