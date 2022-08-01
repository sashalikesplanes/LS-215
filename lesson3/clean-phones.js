/* Problem Description
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s. */
// Input: String representing phone number
// Output: String of 10 digits

// Test cases
// 3421i4132 -> 0000000000
// 123456789 -> 0000000000
// 1234567890 -> 1234567890
// 11234567890 -> 1234567890
// 111234567890 -> 0000000000

// Datastrcture string -> string
// Algorithm
// 1. RegExp to clean up phone number
// 2. Conditional tree to check for validity
// 3. Return based on those
//
function cleanPhoneNumber(phoneNumber) {
  const INVALID_NUMBER = '0000000000'; 
  const phoneDigitsOnly = phoneNumber.replace(/[^0-9]/g, '');
  // console.log(phoneDigitsOnly)
  if (phoneDigitsOnly.length === 10) return phoneDigitsOnly;
  else if (phoneDigitsOnly.length === 11 && phoneDigitsOnly[0] === '1') return phoneDigitsOnly.slice(1);
  else return INVALID_NUMBER;

}

console.log(cleanPhoneNumber('3421i4132')); // -> 0000000000
console.log(cleanPhoneNumber('123456789')); // -> 0000000000
console.log(cleanPhoneNumber('(12345)67890')); // -> 1234567890
console.log(cleanPhoneNumber('112.345.67890')); // -> 1234567890
console.log(cleanPhoneNumber('111234567890')); // -> 0000000000
