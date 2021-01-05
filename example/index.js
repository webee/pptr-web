import puppeteer from '../dist/pptr-web';

window.puppeteer = puppeteer;

(async serverAddr => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://${serverAddr}`,
    ignoreHTTPSErrors: true,
  });
  const version = await browser.version();
  const pagesCount = (await browser.pages()).length;
  const browserWSEndpoint = await browser.wsEndpoint();

  const data = { browserWSEndpoint, pagesCount, version };
  console.log(data);

  let output = document.getElementById('output');
  output.innerText = JSON.stringify(data);
})(`127.0.0.1:8080`);
