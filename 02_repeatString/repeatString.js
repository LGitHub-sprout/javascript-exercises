
//Test 1
const repeatString = function (string, number) {
  let repeatedString = '';
  if (number < 0) return repeatedString += 'ERROR';
  for (i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
};
// Test 1: Repeats the string 
repeatString('hey', 3);

// Test 2: Repeats the string many times
repeatString('hey', 10);

// Test 3: Repeats the string 1 time
repeatString('hey', 1);

// Test 4: Repeats the string 0 times
repeatString('hey', 0);

// Test 5
// Negative numbers are integers.
// isNaN(-1) is FALSE, meaning neg nums are numbers.
repeatString('hey', -1);

// Test 6: Repeats the string a random amount of times
// Checks for hardcoding @param number
repeatString('hey', 69);

// Test 7: Works with blank strings
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
