import puppeteer from '../dist/pptr-web';

window.puppeteer = puppeteer;

(async serverAddr => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `ws://${serverAddr}`,
    ignoreHTTPSErrors: true,
  });
  const pagesCount = (await browser.pages()).length;
  const browserWSEndpoint = await browser.wsEndpoint();

  console.log({ browserWSEndpoint, pagesCount });

  let output = document.getElementById('output');
  output.innerText = JSON.stringify({ browserWSEndpoint, pagesCount });
})(`127.0.0.1:8080`);
