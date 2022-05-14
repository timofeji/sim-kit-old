import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/engine.ts",
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
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};

export default config;
