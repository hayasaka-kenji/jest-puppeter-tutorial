const os = require('os');
const path = require('path');
const rimraf = require('rimraf');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
module.exports = async function () {
  // close the browser instance 
  // await global.__BROWSER_GLOBAL__.close(); // Cannot read property 'close' of undefinedが消えないので消す

  // clean-up the wsEndpoint file
  rimraf.sync(DIR);

  // teardownでコンソールを終了させたいときは以下。
  // console.log('done!');
  // process.exit(0);
};