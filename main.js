const { text, files, html, alphabet } = require('./base');

const regExp = /(Mike )(IS LEARNING)/gi;
const regOrExp = /Mike|JavaScript/gi;
const regExpOccurrences = /Ja+vaScript/gi; // 1 or N letter A occurrences

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

console.log(text.match(regExpOccurrences));

console.log('-----------------------');
const regExpSpecialCharacter = /\.jpe?g/gi //optional letter E

for (const file of files) {
    if (file.match(regExpSpecialCharacter)) {
        console.log(file);
    }
}

console.log('-----------------------');
console.log(html.match(/<.+>.+<\/.+>/g)); //greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); //non-greedy

console.log('-------------------');
console.log(alphabet.match(/[abc123]+/g)); //only show abc and 123
console.log(alphabet.match(/[^abc123]/g)); //only exclude abc and 123
console.log(alphabet.match(/[0-9]/g)); //separate elements
console.log(alphabet.match(/[0-9]+/g)); //groups of elements
console.log(alphabet.match(/[a-zA-Z0-9]+/g)); //groups of elements