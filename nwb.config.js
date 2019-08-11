module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPortfolioExplorer',
      externals: {
        react: 'React'
      }
    }
  }
}
