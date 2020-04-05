module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        './src/styles/mixins.styl',
        './src/styles/variables.styl'
      ]
    }
  }
}
