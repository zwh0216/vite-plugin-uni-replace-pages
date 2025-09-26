const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: "vitePluginUniReplacePages",
    libraryTarget: "umd",
    clean: true,
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.d.ts", to: "index.d.ts" }],
    }),
  ],
};

module.exports = config;
