import puppeteer from 'puppeteer-core/lib/esm/puppeteer/web.js';
import { keyDefinitions } from 'puppeteer-core/lib/esm/puppeteer/common/USKeyboardLayout.js';

export const USAKeyboardLayout = { keyDefinitions };

try {
  if (this === window) {
    window.puppeteer = puppeteer;
    window.USAKeyboardLayout = USAKeyboardLayout;
  }
} catch (err) {
  console.debug(err);
}

export default puppeteer;
