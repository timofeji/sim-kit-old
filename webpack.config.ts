import path from "path";
import webpack from "webpack";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/engine.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./examples/"),
      publicPath: "/examples",
    },
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.glsl$/,
        loader: "webpack-glsl",
      },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "sim-kit.js",
    library: "Engine",
    libraryTarget: "umd",
    globalObject: "this",
  },
};

export default config;
