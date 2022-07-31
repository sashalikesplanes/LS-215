function letterCaseCount(str) {
  return str.split('').reduce((counts, letter) => {
    if (/[a-z]/.test(letter)) counts.lowercase++;
    else if (/[A-Z]/.test(letter)) counts.uppercase++;
    else counts.neither++;
    return counts
  }, { lowercase: 0, uppercase: 0, neither: 0 })
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
