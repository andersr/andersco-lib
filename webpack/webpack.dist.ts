import path from "path";
import { merge } from "webpack-merge";
import { common } from "./webpack.common";
import { ProdConfig } from "./webpack";

const config = merge(common as ProdConfig, {
  mode: "production",
  entry: "./src/index.ts",
  target: "web",
  output: {
    path: path.resolve(__dirname, "../packages/components/dist"),
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: ["**/dist/**/*", "**/node_modules"],
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      react: path.resolve(__dirname, "../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
    },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM",
    },
  },
});

export default config;
