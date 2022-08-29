import { defineConfig } from "cypress";
import webpackConfig from "./webpack/webpack.prod";
export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
    specPattern: "packages/components/src/**/*.cy.tsx",
  },
});
