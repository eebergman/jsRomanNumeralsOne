const expect = require("chai").expect;
const ro_num = require("../src/roman_numerals");
const ro_num_translate = require("../src/roman_numerals").translateToRoman;

describe("The file roman_numerals.js should exist", () => {
    it("should return true if roman_numerals.js exists", () => {
        expect(ro_num).to.exist;
    });
});


describe("roman_numerals translates from arabic numbers to roman; 1 to 9", () => {
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

describe("roman_numerals translates from arabic numbers to roman; 10 to 90", () => {
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

    it("should return 'XC' when given 90", () => {
        expect(ro_num_translate(90)).to.equal("XC");
    });
});

describe("roman_numerals translates from arabic numbers to roman; 100 to 3999", () => {
    it("should return 'C' when given 100", () => {
        expect(ro_num_translate(100)).to.equal("C");
    });

    it("should return 'CD' when given 400", () => {
        expect(ro_num_translate(400)).to.equal("CD");
    });

    it("should return 'D' when given 500", () => {
        expect(ro_num_translate(500)).to.equal("D");
    });

    it("should return 'CM' when given 900", () => {
        expect(ro_num_translate(900)).to.equal("CM");
    });

    it("should return 'M' when given 1000", () => {
        expect(ro_num_translate(1000)).to.equal("M");
    });

    it("should return 'MMMCMXCIX' when given 3999", () => {
        expect(ro_num_translate(3999)).to.equal("MMMCMXCIX");
    });
});

describe("Boundary tests", () => {
    it("should not return 'x' lowercase when given 10", () => {
        expect(ro_num_translate(10)).to.not.equal("x");
    });

    it("should error out when given 0", () => {
        expect(() => {
            ro_num_translate(0);
        }).to.throw("Input has no Roman equivalent.");
    });

    it("should error out when given a number greater than 3999", () => {
        expect(() => {
            ro_num_translate(4000);
        }).to.throw("Input has no Roman equivalent.");
    });

});