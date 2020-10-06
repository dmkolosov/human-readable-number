module.exports = function toReadable (number) {
    let obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
    };

    function twoDigitNumber(number) {
        let stringNum = number.toString();
        if (stringNum[1] == 0) {
            return obj[number];
        }

        if (number < 20) {
            return obj[number];
        }

        if (number >= 20) {
            return obj[stringNum[0] * 10] + " " + obj[stringNum[1]];
        }
    }
    let stringNum = number.toString();
    if (stringNum.length == 1) {
        return obj[number];
    }
    if (stringNum.length == 2) {
return twoDigitNumber(number)
}
if (stringNum.length == 3) {
    if (stringNum[1] == 0 && stringNum[2] == 0) {
        return obj[number];
    }

    let num = stringNum[1] > 0 ? stringNum[1] + stringNum[2] : stringNum[2];
    return obj[stringNum[0] * 100] + " " + twoDigitNumber(num);
}
return 0
}