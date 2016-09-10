# ✂️ Runes
[![NPM Version](https://img.shields.io/npm/v/runes.svg?style=flat-square)](https://www.npmjs.com/package/runes)
[![Build Status](https://img.shields.io/travis/dotcypress/runes.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/runes)

> Unicode-aware JS string splitting with full Emoji support.

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
