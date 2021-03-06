require('dotenv').config();
const path        = require('path');
const SotaCore    = require('sota-core');

const app = SotaCore.createApp({
  rootDir: path.resolve('.')
});
app.start();

process.nextTick(() => {
  const KyberRateCrawler = require('./app/crawlers/KyberRateCrawler');
  const crawler = new KyberRateCrawler();
  crawler.start();
});

module.exports = app;
module.exports.SotaCore = SotaCore;
