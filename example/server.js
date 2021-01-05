const httpProxy = require('http-proxy');

async function createServer(WSEndPoint, host, port) {
  httpProxy
    .createServer({
      target: WSEndPoint, // browser debugging end point
      ws: true,
      localAddress: host,
    })
    .listen(port); // which port the proxy should listen to
  return `ws://${host}:${port}`;
}

const puppeteer = require('puppeteer');

(async () => {
  const host = '0.0.0.0';
  const port = 8080;

  const browser = await puppeteer.launch();
  const pagesCount = (await browser.pages()).length; // just to make sure we have the same stuff on both place
  const browserWSEndpoint = browser.wsEndpoint();
  // avoid CORS problem when connecting to browser debugging end poing directly in web page.
  const customWSEndpoint = await createServer(browserWSEndpoint, host, port);
  console.log({ browserWSEndpoint, customWSEndpoint, pagesCount });
})();
