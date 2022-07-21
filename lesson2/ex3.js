// @ts-check
function isBalanced(str) {
  const OPENING_BRACKET = '(';
  const CLOSING_BRACKET = ')';

  let openCount = 0;
  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === OPENING_BRACKET) openCount++;
    else if (character === CLOSING_BRACKET) openCount--;

    if (openCount < 0) return false;
  };
  return openCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
