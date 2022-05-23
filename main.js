// g - global - find all occurrences
// i - insensitive
// () - groups
// | - or

const { text } = require('./base');
const regExp = /(Mike )(IS LEARNING)/gi;
const found = regExp.exec(text);

//console.log(regExp.test(text));

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}