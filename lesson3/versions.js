// PEDAC
// The Problems
// DEFINE INPUT AND OUTPUT
// INPUT is two string version representations of number
// - Compare software version numbers to determine which is the
//   latest version
// - Numbers separated by point, with first numbers being more 
//   significant
// - Any number of digits is allowed
// - Returns given
// - Any number not specified is assumed 0

// Examples, tests
// 1 === 1.0.0.0
// 2.420 < 3.0.0.4 < 3.0.1 < 3.1

// Data struct
// Array of numbers

// Algo
// 1. split the version number by points
// 2. compare numbers from left to right
// 3. The first number which is bigger indicated the bigger version
// 4. If a number is not present it is equal to 0
// 5. If both numbers are not present and no bigger version was
//    determined then the version is equal
//
function compareVersions(v1, v2) {
  const versionNumbers1 = v1.split('.');
  const versionNumbers2 = v2.split('.');

  let i = 0;
  while (true) {
    if (versionNumbers1[i] === undefined && versionNumbers2[i] === undefined) {
      return 0;
    }

    if (versionNumbers1[i] === undefined) versionNumbers1[i] = 0;
    else if (versionNumbers2[i] === undefined) versionNumbers2 = 0;

    if (versionNumbers1[i] - versionNumbers2[i] > 0) return 1;
    else if (versionNumbers1[i] - versionNumbers2[i] < 0) return -1;
    i++;
  }
}

console.log(compareVersions('3.0.0.4', '3.0.1')); // -1
console.log(compareVersions('4', '4.0.0.0.0')); // 0
console.log(compareVersions('2.69342', '3.0.0.0.0.1')); // -1
console.log(compareVersions('1.18.2', '1.2.0')); // 1
