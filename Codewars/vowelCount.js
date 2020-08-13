/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let symbArray = Array.from(str);
    symbArray.forEach( el => vowels.includes(el) && vowelsCount++);
    return vowelsCount;
  }

  console.log(getCount("abracadabra")); // 5
  console.log(getCount("a bra cad ab ra")); // 5