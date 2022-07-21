const firstName = "Sasha";
const lastName = "Kiselev";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(firstName.concat(lastName));
console.log(fullName.split(" "));
function acronym(string) {
  return string
    .split(/[- ]/g)
    .reduce((acronym, word) => (acronym += word[0].toUpperCase()), "");
}

console.log(acronym("Portable Network Graphics")); // "PNG"
console.log(acronym("First In, First Out")); // "FIFO"
console.log(acronym("PHP: HyperText Preprocessor")); // "PHP"
console.log(acronym("Complementary metal-oxide semiconductor")); // "CMOS"
console.log(acronym("Hyper-text Markup Language"));
