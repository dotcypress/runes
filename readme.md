# ✂️ Runes
[![Build Status](https://img.shields.io/travis/dotcypress/runes.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/runes)
[![NPM Version](https://img.shields.io/npm/v/runes.svg?style=flat-square)](https://www.npmjs.com/package/runes)

Unicode-aware JS string splitting with full Emoji support.

Split a string into its constituent characters, without munging emoji and other non-BMP code points.

## Why?

The native `String#split` implementation does not pay attention to [surrogate pairs](http://en.wikipedia.org/wiki/UTF-16). When the code units of a surrogate pair are split apart, they are not intelligible on their own. Unless they are put back together in the correct order, individual code units will cause problems in code that handles strings.

## Installation

```js
$ npm install runes
```

## Example
  
```js
const runes = require('runes')

// Standard String.split
'♥️'.split('') => ['♥', '️']
'Emoji 🤖'.split('') => ['E', 'm', 'o', 'j', 'i', ' ', '�', '�']
'👩‍👩‍👧‍👦'.split('') => ['�', '�', '‍', '�', '�', '‍', '�', '�', '‍', '�', '�']

// ES6 string iterator
[...'♥️'] => [ '♥', '️' ]
[...'Emoji 🤖'] => [ 'E', 'm', 'o', 'j', 'i', ' ', '🤖' ]
[...'👩‍👩‍👧‍👦'] => [ '👩', '', '👩', '', '👧', '', '👦' ]

// Runes
runes('♥️') => ['♥️']
runes('Emoji 🤖') => ['E', 'm', 'o', 'j', 'i', ' ', '🤖']
runes('👩‍👩‍👧‍👦') => ['👩‍👩‍👧‍👦']

```

## License

The MIT License (MIT)

Copyright (c) 2016 Justin Sippel, Vitaly Domnikov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

