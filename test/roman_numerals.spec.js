const expect = require("chai").expect;
const ro_num = require("../src/roman_numerals");
const ro_num_translate = require("../src/roman_numerals").translateToRoman;

describe("The file roman_numerals.js should exist", () => {
    it("should return true if roman_numerals.js exists", () => {
        expect(ro_num).to.exist;
    });
});


describe("roman_numerals translates from arabic numbers to roman", () => {
    it("should return an 'I' when given 1", () =>{
        expect(ro_num_translate(1)).to.equal("I");
    });

    it("should return 'II' when given 2", () => {
        expect(ro_num_translate(2)).to.equal("II");
    })
});
