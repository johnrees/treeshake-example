module.exports = {
  entry: "./src/index.ts",
  target: "web",
  mode: "production",
  output: {
    filename: "webpack/index.webpack.mjs",
    libraryTarget: "module",
  },
  optimization: {
    minimize: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
