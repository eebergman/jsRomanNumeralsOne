const expect = require("chai").expect;
const ro_num = require("../src/roman_numerals");
const ro_num_translate = require("../src/roman_numerals").translateToRoman;

describe("The file roman_numerals.js should exist", () => {
    it("should return true if roman_numerals.js exists", () => {
        expect(ro_num).to.exist;
    });
});


describe("roman_numerals translates from arabic numbers to roman; under ten", () => {
    it("should return an 'I' when given 1", () => {
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

    it("should return 'VI' when given 6", () => {
        expect(ro_num_translate(6)).to.equal("VI");
    });

    it("should return 'VIII' when given 8", () => {
        expect(ro_num_translate(8)).to.equal("VIII");
    });

    it("should return 'IX' when given 9", () => {
        expect(ro_num_translate(9)).to.equal("IX");
    });
});

describe("roman_numerals translates from arabic numbers to roman; ten to 100", () => {
    it("should return 'X' when given 10", () => {
        expect(ro_num_translate(10)).to.equal("X");
    });

    it("should return 'XL' when given 40", () => {
        expect(ro_num_translate(40)).to.equal("XL");
    });

    it("should return 'L' when given 50", () => {
        expect(ro_num_translate(50)).to.equal("L");
    });

    it("should return 'XC' when given 90", () => {
        expect(ro_num_translate(90)).to.equal("XC");
    });
});

describe("Boundary tests", () => {
    it("should not return 'x' lowercase when given 10", () => {
        expect(ro_num_translate(10)).to.not.equal("x");
    });
});