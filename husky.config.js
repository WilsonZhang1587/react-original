const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'npm run checkEslint',
      'npm run checkStylelint'
    ]),
    'pre-push': 'npm run unitTest'
  }
}
