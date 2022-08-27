import openBrowser from "react-dev-utils/openBrowser";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";
import { common } from "./webpack.common";
import { ProdConfig } from "./webpack";

const PORT = 3000;

const config = merge(common as ProdConfig, {
  mode: "development",
  entry: "./apps/component-lab/src/index.tsx",
  // output: {
  //   publicPath: "/",
  // },
  // devServer: {
  //   port: PORT,
  //   onListening: () => {
  //     openBrowser(`http://localhost:${PORT}`);
  //   },
  // },
  // module: {
  //   rules: [],
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./webpack/templates/index.html",
  //     title: "Component Lab",
  //   }),
  // ],
});

export default config;
