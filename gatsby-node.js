const path = require("path");
const axios = require("axios");

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

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const createPinnedRepo = (repo, idx) => {
    const node = {
      id: createNodeId(`pinned-repo-${idx}`),
      parent: null,
      children: [],
      internal: {
        type: `PinnedRepos`,
        content: JSON.stringify(repo),
        contentDigest: createContentDigest(repo),
      },
      ...repo,
    };

    createNode(node);
  };

  const API_URL =
    "https://gh-pinned-repos-worker.pranjal.workers.dev/?username=PranjalAgni";

  return new Promise((resolve, reject) => {
    axios
      .get(API_URL)
      .then(res => {
        res.data.forEach((repo, idx) => {
          createPinnedRepo(repo, idx);
          resolve();
        });
      })
      .catch(ex => {
        console.error(ex);
        reject(ex);
      });
  });
};
