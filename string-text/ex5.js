function staggeredCase(str) {
  let charIdx = -1;
  return str.split('')
            .map((char) => {
              if (!/[a-z]/i.test(char)) return char
              charIdx++;
              if (charIdx % 2 === 0) return char.toUpperCase();
              else return char.toLowerCase();
            })
            .join('');
}
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
