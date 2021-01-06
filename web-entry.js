import puppeteer from 'puppeteer-core/lib/esm/puppeteer/web.js';

try {
  if (this === window) {
    window.puppeteer = puppeteer;
  }
} catch (err) {
  console.debug(err);
}

export default puppeteer;
