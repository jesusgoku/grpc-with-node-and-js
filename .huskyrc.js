module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-push': 'yarn run code:check',
    'pre-commit': 'yarn run lint-staged',
  },
};
