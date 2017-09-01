
const path = require('path')
const resolve = path.resolve

module.exports = {
  webpack: (config, options, webpack) => {
    // eslint
    const eslintConfig = {
      test: /\.(js|jsx)$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: [/node_modules/, resolve(__dirname, 'build')],
    }
    config.module.rules.unshift(eslintConfig)
    // entry
    config.entry.main = resolve(__dirname, 'server', 'index.js')
    return config
  }
}
