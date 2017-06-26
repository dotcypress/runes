'use strict'

const test = require('ava')

const runes = require('../')
const substring = runes.substr

test('✂️  Runes should handle emoji in middle', (t) => {
  t.deepEqual(runes('abc😤def'), ['a', 'b', 'c', '😤', 'd', 'e', 'f'])
})

test('✂️  Runes should handle leading emoji', (t) => {
  t.deepEqual(runes('🍕abd'), ['🍕', 'a', 'b', 'd'])
})

test('✂️  Runes should handle emoji on end', (t) => {
  t.deepEqual(runes('123🍥'), ['1', '2', '3', '🍥'])
})

test('✂️  Runes should handle emoji', (t) => {
  t.deepEqual(runes('🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋👭👯✊👸🏽❤️'), [
    '🍕', '⚽', '⛵', '✨', '⏳', '☕', '⏰', '🇯🇲',
    '😍', '👍', '💅', '😋', '👭', '👯', '✊', '👸🏽', '❤️'
  ])
})

test('✂️  Runes should handle checkmark', (t) => {
  t.deepEqual(runes('123🍕✓'), ['1', '2', '3', '🍕', '✓'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER', (t) => {
  t.deepEqual(runes('👨‍👩‍👧'), ['👨‍👩‍👧'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER', (t) => {
  t.deepEqual(runes('👨‍👨‍👧‍👧'), ['👨‍👨‍👧‍👧'])
})

test('✂️  Runes should reverse', (t) => {
  const reversed = runes('123🍕✓').reverse().join('')
  const contReversed = runes(reversed).reverse().join('')
  t.is(reversed, '✓🍕321')
  t.is(contReversed, '123🍕✓')
})

test('✂️  Runes should handle single char', (t) => {
  t.deepEqual(runes('a'), ['a'])
})

test('✂️  Runes should handle regular string', (t) => {
  t.deepEqual(runes('Hello'), ['H', 'e', 'l', 'l', 'o'])
})

test('✂️  Runes should handle chinese', (t) => {
  const string = '𨭎", "𠬠", and "𩷶"'
  const result = runes(string)
  t.is(result.length, 16)
  t.is(result[0], '𨭎')
  t.is(result[1], '"')
  t.is(result[5], '𠬠')
  t.is(result[6], '"')
  t.is(result[14], '𩷶')
  t.is(result[15], '"')
})

test('✂️  Runes should handle math script', (t) => {
  t.deepEqual(runes('𝒞𝒯𝒮𝒟'), ['𝒞', '𝒯', '𝒮', '𝒟'])
})

test('✂️  Runes should handle fraktur', (t) => {
  t.deepEqual(runes('𝔅𝔎'), ['𝔅', '𝔎'])
})

test('✂️  Runes should handle acrophonic', (t) => {
  const string = '𐅧, 𐅨, and 𐅩'
  const result = runes(string)
  t.is(result.length, 11)
  t.is(result[0], '𐅧')
  t.is(result[1], ',')
  t.is(result[3], '𐅨')
  t.is(result[4], ',')
  t.is(result[10], '𐅩')
})

test('✂️  Runes should handle arabic', (t) => {
  t.deepEqual(runes('ځڂڃڄڅچڇڈ'), ['ځ', 'ڂ', 'ڃ', 'ڄ', 'څ', 'چ', 'ڇ', 'ڈ'])
})

test('✂️  Runes should handle skin tone indicators', (t) => {
  t.deepEqual(runes('🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿'), ['🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿'])
})

test('✂️  Runes should handle country flags/regional indicator characters', (t) => {
  t.deepEqual(runes('🇦🇸'), ['🇦🇸'])
})

test('✂️  Runes should handle 🏳️‍🌈', (t) => {
  t.deepEqual(runes('🏳️‍🌈'), ['🏳️‍🌈'])
})

test('✂️  Runes should handle empty string', (t) => {
  t.deepEqual(runes(''), [])
})

test('✂️  Runes should throw for null and undefined', (t) => {
  t.throws(() => runes())
})

test('✂️  substring', (t) => {
  t.deepEqual(substring('abc'), 'abc')
  t.deepEqual(substring('abc', 1), 'bc')
  t.deepEqual(substring('abc', 0, 0), '')
  t.deepEqual(substring('abc', 6, 100), '')
  t.deepEqual(substring('👨‍👨‍👧‍👧'), '👨‍👨‍👧‍👧')
  t.deepEqual(substring('a👨‍👨‍👧‍👧', 1), '👨‍👨‍👧‍👧')
  t.deepEqual(substring('abc👨‍👨‍👧‍👧abc', 3), '👨‍👨‍👧‍👧abc')
  t.deepEqual(substring('👨‍👨‍👧‍👧abc', 1), 'abc')
  t.deepEqual(substring('👨‍👨‍👧‍👧abcd', 2), 'bcd')
})
