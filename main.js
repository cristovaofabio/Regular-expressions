const { text } = require('./base');

const regExp = /(Mike )(IS LEARNING)/gi;
const regOrExp = /Mike|JavaScript/gi;

const found = regExp.exec(text);

//console.log(regExp.test(text));

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}

console.log(text.match(regOrExp));
console.log(text.replace(/Mike/gi, 'John')); //replaces all Mike/mike of the text
console.log(text.replace(/(Mike|JavaScript)/gi, '"$1"')); //puts quotes in Mike and JavaScript
console.log(text.replace(/(Mike|JavaScript)/gi, function (input) {
    return input.toUpperCase();
}));