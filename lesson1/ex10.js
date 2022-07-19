let bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true },
];

function processBands(data) {
  data = JSON.parse(JSON.stringify(data)); // make copy

  return data.map((band) => {
    // convert country
    band.country = "Canada";
    band.name = band.name
      .split("")
      .filter((char) => char !== ".")
      .map((char, idx, nameArr) => {
        if (!nameArr[idx - 1] || nameArr[idx - 1] === " ")
          return char.toUpperCase();
        return char;
      })
      .join('');
    return band;
  });
  // remove dots
  // add capitals
}

console.log(processBands(bands));

// should return:
// [
// { name: 'Sunset Rubdown', country: 'Canada', active: false },
// { name: 'Women', country: 'Canada', active: false },
// { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
