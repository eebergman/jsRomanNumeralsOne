const expect = require('chai').expect;
const ro_num = require('../src/roman_numerals');

describe("The file roman_numerals.js should exist", () => {
    it("should return true if roman_numerals.js exists", () => {
        expect(ro_num).to.exist;
    })
})

