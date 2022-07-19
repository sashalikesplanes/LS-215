function totalArea(rects) {
  return rects
    .map((rect) => rect[0] * rect[1])
    .reduce((prev, cur) => prev + cur);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141

function totalSquareArea(rects) {
  return totalArea(rects.filter(rect => rect[0] === rect[1]));
}

console.log(totalSquareArea(rectangles));    // 121
