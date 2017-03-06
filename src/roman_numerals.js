let translateToRoman = function (numeral) {
    const romans = {
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
}