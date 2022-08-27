import { defineConfig } from "cypress";
import webpackDevConfig from "./webpack/webpack.e2e";
export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: webpackDevConfig,
    },
    specPattern: "packages/components/src/**/*.cy.tsx",
  },
});
