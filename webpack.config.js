const path = require('path');

module.exports = {
   mode: process.env.NODE_ENV,

   entry: "./src/index.js",

   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      clean: true,
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
         }
      ]
   },
}