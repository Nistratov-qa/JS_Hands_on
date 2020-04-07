/*Complete the solution so that it returns true if the first argument(string) 
passed in ends with the 2nd argument (also a string).

Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


// function solution(str, ending){
//     let testEnd = new RegExp(ending+"$", "i");
//     return testEnd.test(str);
//   }

function solution(str, ending){
  return str.endsWith(ending);
}

console.log(solution('abc', 'bc'));  // 1. returns true
console.log(solution('abc', 'd'));   // 2. returns false
console.log(solution(':-(', '('));   // 3. returns true
console.log(solution('abc', ''));   // 4. returns true