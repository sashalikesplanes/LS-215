function myFilter(array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));
