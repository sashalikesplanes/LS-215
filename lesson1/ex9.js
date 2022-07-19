function anagram(word, list) {
  function sortWord(word) {
    // returns the word string with leeters sorted alphabetically
    return word.split('').sort().join('');
  }

  const sortedWord = sortWord(word)
  return list.filter(word => sortWord(word) === sortedWord);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
