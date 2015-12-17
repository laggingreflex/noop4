
# proot

  Resolve the root directory of the project.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![License][license-image]][license-url]

## Install

```bash
$ npm install proot
```

## Usage

  Resolve the project's root directory relative to `__dirname`.

```javascript
var root = require('proot')();
```

  Resolve the project's root directory relative to `process.cwd()` (intended for CLIs).

```javascript
var root = require('proot')(true);
```

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/proot.svg?label=version&style=flat
[npm-url]: https://npmjs.org/package/proot
[downloads-image]: https://img.shields.io/npm/dm/proot.svg
[downloads-url]: https://npmjs.org/package/proot
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
