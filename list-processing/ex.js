// @ts-check

function sum(number) {
  return String(number)
    .split("")
    .reduce((sum, cur) => sum + Number(cur), 0);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45

const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphabeticNumberSort(nums) {
  return [...nums].sort((num1, num2) => {
    if (words[num1] < words[num2]) return -1;
    else if (words[num1] > words[num2]) return 1;
    else return 0;
  });
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);

function multiplyAllPairs(arr1, arr2) {
  const result = [];
  arr1.forEach((num1) => {
    arr2.forEach((num2) => result.push(num1 * num2));
  });
  return result.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

function sumOfSums(nums) {
  return nums.reduce((sum, cur, idx) => {
    return sum + nums.slice(0, idx + 1).reduce((prev, cur) => prev + cur, 0);
  }, 0);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => {
    return str.slice(0, idx + 1);
  });
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
function substrings(str) {
  return str
    .split("")
    .map((_, idx) => {
      return leadingSubstrings(str.slice(idx));
    })
    .flat();
}

console.log(substrings("abcde"));

function palindromes(str) {
  return substrings(str).filter(
    (str) => str === str.split("").reverse().join("") && str.length > 1
  );
}

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]
console.log(palindromes("hello-madam-did-madam-goodbye"));

function buyFruit(arr) {
  return arr.map(fruit => {
    const fruits = [];
    for (let i = 0; i < fruit[1]; i++) fruits.push(fruit[0]);
    return fruits;
  }).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, list) {
  return list.filter(tx => tx.id === id);
}
console.log(transactionsFor(105, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
function isItemAvailable(id, list) {
  return transactionsFor(id, list).reduce((count, tx) => {
    if (tx.movement === 'in') count += tx.quantity;
    else count -= tx.quantity;
    return count;
  }, 0) > 0;
}
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
