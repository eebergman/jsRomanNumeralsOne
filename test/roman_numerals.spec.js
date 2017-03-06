const expect = require("chai").expect;
const ro_num = require("../src/roman_numerals");
const ro_num_translate = require("../src/roman_numerals").translateToRoman;

describe("The file roman_numerals.js should exist", () => {
    it("should return true if roman_numerals.js exists", () => {
        expect(ro_num).to.exist;
    });
});


describe("roman_numerals translates from arabic numbers to roman; ten and under", () => {
    it("should return an 'I' when given 1", () =>{
        expect(ro_num_translate(1)).to.equal("I");
    });

    it("should return 'III' when given 3", () => {
        expect(ro_num_translate(3)).to.equal("III");
    });

    it("should return 'IV' when given 4", () => {
        expect(ro_num_translate(4)).to.equal("IV");
    });

    it("should return 'V' when given 5", () => {
        expect(ro_num_translate(5)).to.equal("V");
    });
});
