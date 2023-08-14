const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: "Text Editor PWA",
      }),
      new WebpackPwaManifest({
        name: "Text Editor PWA",
        short_name: "Text Editor",
        start_url: "/",
        description: "A simple text editor PWA",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      // Service Worker
      new InjectManifest({
        swSrc: "./src-sw.js",
      }),
    ],

    module: {
      rules: [],
    },
  };
};
