module.exports = {
  outputDir: 'kvue',
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}