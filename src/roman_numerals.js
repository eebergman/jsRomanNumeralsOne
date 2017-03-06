let translateToRoman = function (numeral) {
    const romans = {
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    };

    let romanAnswer = '';
    let key = null;

    for (key in romans) {
        while (numeral >= romans[key]) {
            numeral -= romans[key];
            romanAnswer += key;
        }
    }
    return romanAnswer;
};


module.exports = {
    translateToRoman: translateToRoman
};