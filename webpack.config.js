module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            "presets": [
              ["@babel/preset-env", {
                targets: {
                  ie: "11",
                },
              }]
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "helpers": true,
                  "regenerator": true,
                  "useESModules": true
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
