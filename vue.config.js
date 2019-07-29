module.exports = {
  outputDir: 'Kvue',
  productionSourceMap: false,
  assetsDir: 'assets',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}