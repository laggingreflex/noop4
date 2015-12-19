
# noop4

  No operation avoiding references.

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![License][license-image]][license-url]

## Install

```bash
$ npm install noop4 --save
```

## Usage

  Nothing happens and no references are created.

```javascript
var noop = require('noop4');

function example(fn) {
  fn = fn || noop();
  return fn('beep');
}

example();
// nothing happened
```

## Why?

  Sometimes the `noop` method is enriched with methods and properties.
  To ensure a clean usage `noop4` creates a new function each time avoiding previous references.

## See also
- [noop1][noop1-url]
- [noop2][noop2-url]
- [noop3][noop3-url]
- [nop][nop-url]
- [no-op][no-op-url]

## License

[MIT][license-url]

[npm-image]: https://img.shields.io/npm/v/noop4.svg?label=version&style=flat
[npm-url]: https://npmjs.org/package/noop4
[downloads-image]: https://img.shields.io/npm/dm/noop4.svg
[downloads-url]: https://npmjs.org/package/noop4
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE

[noop1-url]: https://www.npmjs.com/package/noop
[noop2-url]: https://github.com/yoshuawuyts/noop2
[noop3-url]: https://github.com/sindresorhus/noop3
[nop-url]: https://github.com/supershabam/nop
[no-op-url]: https://github.com/mattdesl/no-op
