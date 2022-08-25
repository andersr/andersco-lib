import openBrowser from "react-dev-utils/openBrowser";
import HtmlWebpackPlugin from "html-webpack-plugin";

// import { merge } from "webpack-merge";

// import { DevConfig } from './webpack'
// import { common } from './webpack.common'

const API_HOST = "http://localhost:8000";
const PORT = 3000;

// const config = merge(common as DevConfig, {
//   mode: 'development',
//   output: {
//     publicPath: '/'
//   },
//   devServer: {
//     port: PORT,
//     historyApiFallback: true,
//     proxy: {
//       '/api': API_HOST
//     },
// onListening: () => {
//   openBrowser(`http://localhost:${PORT}`)
// }
//   }
// })

// export default config

import path from "path";

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  // output: {
  //   path: path.resolve(__dirname, "../packages/components/dist"),
  //   filename: "index.js",
  //   libraryTarget: "commonjs2",
  // },
  output: {
    publicPath: "/",
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    proxy: {
      "/api": API_HOST,
    },
    onListening: () => {
      openBrowser(`http://localhost:${PORT}`);
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    // alias: {
    //   react: path.resolve(__dirname, "../node_modules/react"),
    //   "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../../webpack/templates/index.html",
      title: "Default page title",
    }),
  ],
  // externals: {
  //   // Don't bundle react or react-dom
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "React",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "ReactDOM",
  //     root: "ReactDOM",
  //   },
  // },
};

export default config;
