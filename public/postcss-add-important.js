// postcss-add-important.js
module.exports = () => {
  return {
    postcssPlugin: 'postcss-add-important',
    Once(root) {
      root.walkRules(rule => {
        rule.walkDecls(decl => {
          decl.important = true;
        });
      });
    }
  };
};
module.exports.postcss = true;