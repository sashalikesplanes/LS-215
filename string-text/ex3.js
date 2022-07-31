function wordCap(sentence) {
  return sentence.replace(/(\S)(\S*)/g, (_, p1, p2) => {
    return p1.toUpperCase() + p2.toLowerCase();
  });
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
