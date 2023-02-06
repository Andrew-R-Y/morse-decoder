const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const length = expr.length;
    const numberOfsigns = length / 10;
    let cloneOfExpr;
    const arrayOfLetters = [];
    for (let i = 0; i < numberOfsigns; i++) {
        cloneOfExpr = expr;
        newLetter = cloneOfExpr.slice(0 + i * 10, 10 + i * 10);
        arrayOfLetters.push(newLetter);
    }
    const modifyedArray = arrayOfLetters.map( (item) => {
        if (item === '**********') {
            return ' '
        } else {return String(item * 1)}
    })
    const arrayWithSymbols = modifyedArray.map( (item) => {
        if (item === ' ') {
            return ' '
        } else {return item.replaceAll('10', '.').replaceAll('11', '-')}
    })
    const arrayWithLetters = arrayWithSymbols.map( (item) => {
        if (item === ' ') {
            return ' '
        } else {
            return MORSE_TABLE[item]
        }
    })
    const result = arrayWithLetters.join('');
    return result;
}

module.exports = {
    decode
}