const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.join(__dirname, "src"),
        "@src": path.join(__dirname, "src"),
        "@common": path.join(__dirname, "src/components/common"),
        "@components": path.join(__dirname, "src/components"),
        "@pages": path.join(__dirname, "src/pages"),
        "@hooks": path.join(__dirname, "src/hooks"),
        "@config": path.join(__dirname, "src/config"),
      },
    },
  });
};
