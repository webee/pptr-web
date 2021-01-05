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

or in html page with a script tab

```html
<script src=""></script>

<script>
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
  });
</script>
```
