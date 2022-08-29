import { merge } from "webpack-merge";
import { common } from "./webpack.common";
import { ProdConfig } from "./webpack";

const PORT = 8080;

const config = merge(common as ProdConfig, {
  mode: "production",
  entry: "./apps/component-lab/src/index.tsx",
  devServer: {
    port: PORT,
  },
});

export default config;
