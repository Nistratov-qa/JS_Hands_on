const s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";  // "3/56"
const s1="aaabbbbhaijjjm";  // "0/14"
const s2="aaaxbbbbyyhwawiwjjjwwm";  // "8/22"

function printerError(s) {
    const errorNum = s.split('').filter( color => color.match(/[^a-m]/g));
    return errorNum.length + "/" + s.length
}

console.log(printerError(s2));