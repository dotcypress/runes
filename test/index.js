'use strict'

require('should')
const runes = require('../')

describe('✂️  Runes', function () {
  describe('', function () {
    it('should work with emoji in middle', function (done) {
      runes('abc😤def').should.be.deepEqual(['a', 'b', 'c', '😤', 'd', 'e', 'f'])
      done()
    })

    it('should work with leading emoji', function (done) {
      runes('🍕abd').should.be.deepEqual(['🍕', 'a', 'b', 'd'])
      done()
    })

    it('should work with emoji on end', function (done) {
      runes('123🍥').should.be.deepEqual(['1', '2', '3', '🍥'])
      done()
    })

    it('should work with emoji', function (done) {
      runes('🍕⚽⛵✨⏳☕⏰🇯🇲😍👍💅😋👭👯✊👸🏽❤️').should.be.deepEqual([
        '🍕', '⚽', '⛵', '✨', '⏳', '☕', '⏰', '🇯🇲',
        '😍', '👍', '💅', '😋', '👭', '👯', '✊', '👸🏽', '❤️'
      ])
      done()
    })

    it('should work with checkmark', function (done) {
      runes('123🍕✓').should.be.deepEqual(['1', '2', '3', '🍕', '✓'])
      done()
    })

    it('should reverse', function (done) {
      const reversed = runes('123🍕✓').reverse().join('')
      const contReversed = runes(reversed).reverse().join('')
      reversed.should.equal('✓🍕321')
      contReversed.should.equal('123🍕✓')
      done()
    })

    it('should work with single char', function (done) {
      runes('a').should.be.deepEqual(['a'])
      done()
    })

    it('should work with regular string', function (done) {
      runes('Hello').should.be.deepEqual(['H', 'e', 'l', 'l', 'o'])
      done()
    })

    it('should work with chinese', function (done) {
      const string = '𨭎", "𠬠", and "𩷶"'
      const result = runes(string)
      result.length.should.equal(16)
      result[0].should.equal('𨭎')
      result[1].should.equal('"')
      result[5].should.equal('𠬠')
      result[6].should.equal('"')
      result[14].should.equal('𩷶')
      result[15].should.equal('"')
      done()
    })

    it('should work with math script', function (done) {
      runes('𝒞𝒯𝒮𝒟').should.be.deepEqual(['𝒞', '𝒯', '𝒮', '𝒟'])
      done()
    })

    it('should work with fraktur', function (done) {
      runes('𝔅𝔎').should.be.deepEqual(['𝔅', '𝔎'])
      done()
    })

    it('should work with acrophonic', function (done) {
      const string = '𐅧, 𐅨, and 𐅩'
      const result = runes(string)
      result.length.should.equal(11)
      result[0].should.equal('𐅧')
      result[1].should.equal(',')
      result[3].should.equal('𐅨')
      result[4].should.equal(',')
      result[10].should.equal('𐅩')
      done()
    })

    it('should work with arabic', function (done) {
      runes('ځڂڃڄڅچڇڈ').should.be.deepEqual(['ځ', 'ڂ', 'ڃ', 'ڄ', 'څ', 'چ', 'ڇ', 'ڈ'])
      done()
    })

    it('should work with skin tone indicators', function (done) {
      runes('🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿').should.be.deepEqual(['🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿'])
      done()
    })

    it('should work with country flags/regional indicator characters', function (done) {
      runes('🇦🇸').should.be.deepEqual(['🇦🇸'])
      done()
    })

    it('should work with empty string', function (done) {
      runes('').should.be.deepEqual([])
      done()
    })

    it('should throw for null and undefined', function (done) {
      (function () {
        runes()
      }).should.throw()
      done()
    })
  })
})
