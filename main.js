const { text, files, html, alphabet, cpfNumbers, ips, lookahead } = require('./base');

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

console.log('------CPF numbers------');
console.log(cpfNumbers.match(/[\d.-]+/g));
/* 
    two groups of three digits and a point, 
    one group of three digits and one line, 
    and one group of the two digits: 
*/
console.log(cpfNumbers.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

console.log('------IPs------');
console.log(ips.match(/[\d.]+/g));

// 25[0-5] = number between 250 and 255
// 2[0-4][0-9] = number between 200 and 249
// 1\d{2} = numbers between 100 and 199
// [1-9]\d = numbers between 10 and 99
// \d = numbers between 0 and 9
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g; // number: 250 -255
console.log(ips.match(ipRegExp));

/*
for (let i = 0; i < 300; i++) {
    const ip = `${i}.${i}.${i}.${i}`;

    if (ip.match(ipRegExp)) {
        console.log(`----- ${ip.match(ipRegExp)}`);
    } else {
        console.log(ip);
    }
}
*/

console.log('----START and FINISH with something----');
const cpf = '037.471.591-00';
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;

console.log(cpf.match(cpfRegExp));

console.log('---Match and Replace------')
// <(\w)[\s\S]*?> ([\s\S]*?) <\/\1>
console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 --- $3 --- $4'));

console.log('---LOOKAHEAD and LOOKBEHIND----');

//all lines that finish with 'active'
console.log(lookahead.match(/.+[^in]active$/gim));

//don't show 'active' name in lines that contains 'active'
console.log(lookahead.match(/.+(?=[^in]active)/gim));

//all lines that not contains 'active'
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

//don't show 'OFFLINE' name in lines that don't start with ONLINE
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//all lines that don't start with ONLINE:
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));