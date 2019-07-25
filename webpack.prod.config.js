const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

module.exports = () => {
  return merge(baseWebpackConfig, {
    mode: "production"
  });
};
