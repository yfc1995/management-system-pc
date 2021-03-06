

const { override, fixBabelImports, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const addLessLoader = require("customize-cra-less-loader");
const LodashWebpackPlugin = require('lodash-webpack-plugin');
const path = require('path');
const WebpackBar = require("webpackbar");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

function getPath(name) {
  return path.resolve(__dirname, name)
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      "@": getPath('src'),
      '@cpm': getPath('src/components'),
      '@api': getPath("src/api"),
      '@assets': getPath("src/assets"),
      '@pages': getPath("src/pages"),
      '@router': getPath("src/router"),
      '@img': getPath("src/assets/images"),
      '@utils': getPath("src/utils"),
      '@store': getPath("src/store/modules")
    }),
    addWebpackPlugin(
      new WebpackBar({
        name: process.env.NODE_ENV !== "production" ? "正在启动" : "正在打包",
        color: "#fa8c16"
      }),
      new LodashWebpackPlugin({
        collections: true,
        paths: true
      }),
      new UglifyJsPlugin({
        // 开启打包缓存
        cache: process.env.NODE_ENV !== "production",
        // 开启多线程打包
        parallel: true,
        uglifyOptions: {
          // 删除警告
          warnings: false,
          // 压缩
          compress: {
            // 移除console
            drop_console: true,
            // 移除debugger
            drop_debugger: true
          }
        }
      }),
      new MomentLocalesPlugin()
    ),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: { '@primary-color': '#1DA57A' },
          localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
        }
      }
    }),
  )
}
