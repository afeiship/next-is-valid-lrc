# next-is-valid-lrc
> Detete string is a valid lrc.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-is-valid-lrc
```

## usage
```js
import '@jswork/next-is-valid-lrc';

const str1 = '[ti:]'
const str2 = `[00:04.06]Hi, I'm Mocky. 嗨，我是Mocky。`;

nx.isValidLrc(str1);    // false
nx.isValidLrc(str2);    // true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-valid-lrc/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-is-valid-lrc
[version-url]: https://npmjs.org/package/@jswork/next-is-valid-lrc

[license-image]: https://img.shields.io/npm/l/@jswork/next-is-valid-lrc
[license-url]: https://github.com/afeiship/next-is-valid-lrc/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-is-valid-lrc
[size-url]: https://github.com/afeiship/next-is-valid-lrc/blob/master/dist/next-is-valid-lrc.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-is-valid-lrc
[download-url]: https://www.npmjs.com/package/@jswork/next-is-valid-lrc
