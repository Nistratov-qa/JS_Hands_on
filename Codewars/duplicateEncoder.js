const word1 = "din";      // "((("
const word2 = "recede";   //  "()()()"
const word3 = "Success";  //  ")())())"
const word4 = "(( @";     //  "))((" 

function duplicateEncode(word) {
    let arr = Array.from(word.toLowerCase());
    let encodedArr = arr.map(el => {
        let arrayForEachEl = arr.filter(i => i == el);
        if (arrayForEachEl.length == 1) {
            return "("
        } else {
            return ")"
        }
    });
    return encodedArr.join('');
};

function dublicateEncodeShort(word){
    const wordToLower = word.toLowerCase();
    return wordToLower.replace(/./g,  (m) => wordToLower.indexOf(m) == wordToLower.lastIndexOf(m) ? '(' : ')');
};

console.log(duplicateEncode(word3));
console.log(dublicateEncodeShort(word3));