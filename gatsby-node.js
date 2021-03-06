const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // hatena blog json作成
      const createHatenaJson = require('./createHatena.js');
      console.log(createHatenaJson);
    resolve(
      graphql(
        `
        query {
          allHatenaJson {
            edges {
              node {
                day
                title
                href
                imgurl
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }
      })
    );
  });
};

/* Allows named imports */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};