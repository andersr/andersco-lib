import { defineConfig } from "cypress";
import webpackDevConfig from "./webpack/webpack.dev";
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
