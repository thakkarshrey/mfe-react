const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// The goal of a loader is to tell webpack to process some different files as we start to import them into our project.
// Meaning loaders are used to transform/process a file into our project that is not just plain javascript file so that webpack can bundle them.
// CSS loaders : Allows you to import CSS files in your javscript
// Babel loaders : Transpiles newer ES6+ javascript or typescript into older javascript for better browser compatibility
// File loaders/URL loaders : Lets you import images or fonts turning them into urls
// A loader acts as a preprocessor that converts a file from its original format and convert it into a format that the webpack can handle or read.
// For example converting SAAS, Typescript, images into CSS strings, javascript, data URI's.

// A preset is a pre defined collection of plugins that tells babel on how to transform the code.
// For example '@babel/preset-env' preset instructs babel through babel-loader and tells to transforms js syntax to modern browser compatibility code.
// For example '@babel/preset-react' preset instructs babel through babel-loader and tells to transforms jsx syntax to modern browser compatibility code.

// A preset is a collection of plugins and a plugin does one specific job.

// AST - Abstract Syntax tree is a tree like representation of your source code that compilers, interpreters, and babel uses internally to understand your code.

// @babel/plugin-transform-runtime - It helps to remove duplication of code reducing the bundle size. Babel inlines small helper functions in all the files where those functions are needed. This plugin helps to seperate out the duplicate code into one seperate file and those helper functions are imported from that location. It can drastically shrink your bundle size if there are hundreds of such functions.
