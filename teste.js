const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require ('chromedriver');
let opts = new chrome.Options();
let fs = require('fs');
(async function example() {
  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts.headless())
    .build();
  await driver.get('http://automationpractice.com/index.php');
  try {
    let base64 = await driver.printPage({pageRanges:["1-2"]});
    await fs.writeFileSync('./test.pdf', base64, 'base64');
  } catch (e) {
    console.log(e)
  }
  await driver.quit();
})();
