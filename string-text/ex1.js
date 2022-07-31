function removeVowels(words) {
  function removeVowelsFromWord(word) {
    return word.split('').filter(char => !isVowel(char)).join('');
  }

  function isVowel(char) {
    return /[aeiou]/i.test(char)
  }

  return words.map((word) => removeVowelsFromWord(word))
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
