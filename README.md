# pptr-web

puppeteer for web browsers.

pptr-web's versions are correspond to the versions of puppeteer-core, so choose the right version for your target browser(chrome/chromium).

## Install && Usage

`npm install pptr-web`

```javascript
import puppeteer from 'pptr-web';

const browser = await puppeteer.connect({
  browserURL: 'http://localhost:9222',
});
```

or download https://cdn.jsdelivr.net/npm/pptr-web@5.5.0/dist/module/pptr.js

then use as a module:

```javascript
import puppeteer from './pptr.js';

const browser = await puppeteer.connect({
  browserURL: 'http://localhost:9222',
});
```

or in html page with a script tag

```html
<script src="https://cdn.jsdelivr.net/npm/pptr-web@5.5.0/dist/browser/pptr.js"></script>

<script>
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
  });
</script>
```
