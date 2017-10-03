const selenium = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const os = require('os');

process.env.MOZ_HEADLESS = "1";

const stdout = process.stdout;
const src = 'file:// ' + path.resolve(__dirname, process.argv[2]);
const browser = process.argv[3];

// NOTE(sam): No typing for `headless()` option as of 8/30/2017.
// I've opened a PR to DefinitelyTyped to fix this.
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/19463
const chromeOpts = (new chrome.Options()).headless();

const loggingPrefs = new selenium.logging.Preferences();
loggingPrefs.setLevel('browser', 'all');
const driver = new selenium.Builder()
  .forBrowser(browser)
  .setLoggingPrefs(loggingPrefs)
  .setChromeOptions(chromeOpts)
  .build();

driver.get(src);
driver.wait(selenium.until.titleIs('done'), 5 * 60 * 1000);

driver.findElement(selenium.By.id('data'))
  .then(e => e.getAttribute("value"))
  .then(s => stdout.write(s))
  .then(_ => driver.quit())
  .catch(exn => {
    stdout.write(`Got an exception from Selenium: ${exn}`);
    driver.quit();
  });
