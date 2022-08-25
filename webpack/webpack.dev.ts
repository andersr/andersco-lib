import openBrowser from "react-dev-utils/openBrowser";
import HtmlWebpackPlugin from "html-webpack-plugin";

const API_HOST = "http://localhost:8000";
const PORT = 3000;

const config = {
  mode: "development",
  entry: "./apps/component-lab/src/index.tsx",
  output: {
    publicPath: "/",
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    static: "dist",
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
        use: ["style-loader", "css-loader", "postcss-loader"],
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./webpack/templates/index.html",
      title: "Component Lab",
    }),
  ],
};

export default config;
