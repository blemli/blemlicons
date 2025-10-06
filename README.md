# blemlicons
Everything needs an icon :)

## Install
```bash
npm i blemlicons
# or
pnpm add blemlicons
```


## Usage

Import or reference icons directly.

Example (HTML)
```html
<img src="/node_modules/blemlicons/icons/check.svg" alt="" width="24" height="24" />
```

Bundler (e.g. Vite/Next)
```js
import check from "blemlicons/icons/check.svg";

<img src={check} alt="" />
```


## Dev

You can run a small validation script to check all SVGs before publishing:

```bash
npm run validate
```

This checks:
- all icons have a 24×24 viewBox
- use `currentColor` for stroke/fill
- no inline width/height attributes

