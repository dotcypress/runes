'use strict'

require('should')
const test = require('ava')

const runes = require('../')
const substring = runes.substr
const length = runes.len

test('✂️  Runes should handle emoji in middle', (t) => {
  runes('abc😤def').should.be.deepEqual(['a', 'b', 'c', '😤', 'd', 'e', 'f'])
})

test('✂️  Runes should handle leading emoji', (t) => {
  runes('🍕abd').should.be.deepEqual(['🍕', 'a', 'b', 'd'])
})

test('✂️  Runes should handle emoji on end', (t) => {
  runes('123🍥').should.be.deepEqual(['1', '2', '3', '🍥'])
})

test('✂️  Runes should handle emoji', (t) => {
  runes('🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋👭👯✊👸🏽❤️').should.be.deepEqual([
    '🍕', '⚽', '⛵', '✨', '⏳', '☕', '⏰', '🇯🇲',
    '😍', '👍', '💅', '😋', '👭', '👯', '✊', '👸🏽', '❤️'
  ])
})

test('✂️  Runes should handle checkmark', (t) => {
  runes('123🍕✓').should.be.deepEqual(['1', '2', '3', '🍕', '✓'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER', (t) => {
  runes('👨‍👩‍👧').should.be.deepEqual(['👨‍👩‍👧'])
})

test('✂️  Runes should handle ZERO WIDTH JOINER', (t) => {
  runes('👨‍👨‍👧‍👧').should.be.deepEqual(['👨‍👨‍👧‍👧'])
})

test('✂️  Runes should reverse', (t) => {
  const reversed = runes('123🍕✓').reverse().join('')
  const contReversed = runes(reversed).reverse().join('')
  reversed.should.equal('✓🍕321')
  contReversed.should.equal('123🍕✓')
})

test('✂️  Runes should handle single char', (t) => {
  runes('a').should.be.deepEqual(['a'])
})

test('✂️  Runes should handle regular string', (t) => {
  runes('Hello').should.be.deepEqual(['H', 'e', 'l', 'l', 'o'])
})

test('✂️  Runes should handle chinese', (t) => {
  const string = '𨭎", "𠬠", and "𩷶"'
  const result = runes(string)
  result.length.should.equal(16)
  result[0].should.equal('𨭎')
  result[1].should.equal('"')
  result[5].should.equal('𠬠')
  result[6].should.equal('"')
  result[14].should.equal('𩷶')
  result[15].should.equal('"')
})

test('✂️  Runes should handle math script', (t) => {
  runes('𝒞𝒯𝒮𝒟').should.be.deepEqual(['𝒞', '𝒯', '𝒮', '𝒟'])
})

test('✂️  Runes should handle fraktur', (t) => {
  runes('𝔅𝔎').should.be.deepEqual(['𝔅', '𝔎'])
})

test('✂️  Runes should handle acrophonic', (t) => {
  const string = '𐅧, 𐅨, and 𐅩'
  const result = runes(string)
  result.length.should.equal(11)
  result[0].should.equal('𐅧')
  result[1].should.equal(',')
  result[3].should.equal('𐅨')
  result[4].should.equal(',')
  result[10].should.equal('𐅩')
})

test('✂️  Runes should handle arabic', (t) => {
  runes('ځڂڃڄڅچڇڈ').should.be.deepEqual(['ځ', 'ڂ', 'ڃ', 'ڄ', 'څ', 'چ', 'ڇ', 'ڈ'])
})

test('✂️  Runes should handle skin tone indicators', (t) => {
  runes('🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿').should.be.deepEqual(['🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿'])
})

test('✂️  Runes should handle country flags/regional indicator characters', (t) => {
  runes('🇦🇸').should.be.deepEqual(['🇦🇸'])
})

test('✂️  Runes should handle empty string', (t) => {
  runes('').should.be.deepEqual([])
})

test('✂️  Runes should throw for null and undefined', (t) => {
  (function () {
    runes()
  }).should.throw()
})

test('✂️  substring', (t) => {
  substring('abc').should.be.deepEqual('abc')
  substring('abc', 1).should.be.deepEqual('bc')
  substring('abc', 0, 0).should.be.deepEqual('')
  substring('abc', 6, 100).should.be.deepEqual('')
  substring('👨‍👨‍👧‍👧').should.be.deepEqual('👨‍👨‍👧‍👧')
  substring('a👨‍👨‍👧‍👧', 1).should.be.deepEqual('👨‍👨‍👧‍👧')
  substring('abc👨‍👨‍👧‍👧abc', 3).should.be.deepEqual('👨‍👨‍👧‍👧abc')
  substring('👨‍👨‍👧‍👧abc', 1).should.be.deepEqual('abc')
  substring('👨‍👨‍👧‍👧abcd', 2).should.be.deepEqual('bcd')
})

test('✂️  substring', (t) => {
  length('abc').should.be.equal(3)
  length('🎅🏻').should.be.equal(1)
  length('👨‍👨‍👧‍👧').should.be.equal(1)
  length('a👨‍👨‍👧‍👧').should.be.equal(2)
  length('abc👨‍👨‍👧‍👧abc').should.be.equal(7)
  length('👨‍👨‍👧‍👧abc').should.be.equal(4)
  length('❤️abc').should.be.equal(4)
})
