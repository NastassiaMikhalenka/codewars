"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
// Example:
// multiplication_table(3,3)
// 1 2 3
// 2 4 6
// 3 6 9
// -->[[1,2,3],[2,4,6],[3,6,9]]
// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.
function multiplicationTable(row, col) {
  var array = [];

  for (var _i = 1; _i <= row; _i++) {
    var array2 = [];

    for (var j = 1; j <= col; j++) {
      array2.push(j * _i);
    }

    array.push(array2);
  }

  return array;
} //  I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem, but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous.
// Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.
// As usual, a few examples might be way better than thousands of words from me:
// squaresNeeded(0) === 0
// squaresNeeded(1) === 1
// squaresNeeded(2) === 2
// squaresNeeded(3) === 2
// squaresNeeded(4) === 3
// Input is always going to be valid/reasonable: ie: a non negative number; extra cookie for not using a loop to compute square-by-square (at least not directly) and instead trying a smarter approach [hint: some peculiar operator]; a trick converting the number might also work: impress me!


function squaresNeeded(grains) {
  var s = 0;

  while (Math.pow(2, s) - 1 < grains) {
    s++;
  }

  return s;
} //   To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.
// Example:
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.


function multiplyAll(arr) {
  return function (n) {
    if (arr.length == 0) {
      return [];
    } else {
      var result = [];

      for (var _i2 = 0; _i2 < arr.length; _i2++) {
        result.push(arr[_i2] * n);
      }

      return result;
    }
  };
} //   Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.
// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).


function getParticipants(handshakes) {
  if (!handshakes) return 1;
  var hand = 0;
  var sum = 0;

  while (handshakes > sum) {
    sum = hand * (hand + 1) / 2;
    hand++;
  }

  return hand;
} // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)


function isIsogram(str) {
  str = str.toLowerCase();

  for (var _i3 = 0; _i3 < str.length; ++_i3) {
    for (var j = _i3 + 1; j < str.length; ++j) {
      if (str[_i3] === str[j]) {
        return false;
      }
    }
  }

  return true;
} // Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'


function solution(str) {
  return str.split('').reverse().join('');
} //   Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.


function absentVowel(x) {
  var vowels = 'aeiou';

  for (var _i4 in vowels) {
    if (x.toLowerCase().indexOf(vowels[_i4]) == -1) {
      return Number(_i4);
    }
  }
} // Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'


function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
} // Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


function encode(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsNum = ['1', '2', '3', '4', '5'];

  var encode = _toConsumableArray(string).map(function (e) {
    return vowels.includes(e) ? e = vowels.indexOf(e) + 1 : e;
  }).join('');

  return encode;
}

function decode(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsNum = ['1', '2', '3', '4', '5'];

  var decode = _toConsumableArray(string).map(function (e) {
    return vowelsNum.includes(e) ? e = vowels[vowelsNum.indexOf(e)] : e;
  }).join('');

  return decode;
} // Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:


function generatePairs(n) {
  var arr = [];

  for (var _i5 = 0; _i5 <= n; _i5++) {
    for (var j = _i5; j <= n; j++) {
      arr.push([_i5, j]);
    }
  }

  return arr;
} // Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s) {
  return Math.min.apply(Math, _toConsumableArray(s.split(' ').map(function (word) {
    return word.length;
  })));
} // Modify the kebabize function so that it converts a camel case string into a kebab case.
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps


function kebabize(str) {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
} // Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.


function high(x) {
  var str = x.split(' ').map(function (x) {
    return _toConsumableArray(x).reduce(function (a, b) {
      return a + b.charCodeAt(0) - 96;
    }, 0);
  });
  return x.split(' ')[str.indexOf(Math.max.apply(Math, _toConsumableArray(str)))];
} // Write a function to split a string and convert it into an array of words. For example:


function stringToArray(string) {
  return string.split(" ");
} // You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.


function check(a, x) {
  var str = a.indexOf(x);

  if (str !== -1) {
    return true;
  } else {
    return false;
  }
} //   Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name) {
  return name.split(' ').map(function (item) {
    return item[0];
  }).join('.').toUpperCase();
} // Convert a String to a Number!


var stringToNumber = function stringToNumber(str) {
  var number = Number(str);
  return number;
}; // Are You Playing Banjo?


function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
} // Remove String Spaces


function noSpace(x) {
  return x.split(' ').filter(function (s) {
    return s;
  }).join('');
} // Well of Ideas - Easy Version


function well(x) {
  var item = x.filter(function (x) {
    return x == 'good';
  }).length;

  if (item < 1) {
    return 'Fail!';
  } else if (item < 3) {
    return 'Publish!';
  } else {
    return 'I smell a series!';
  }
} // Sum Mixed Array


function sumMix(x) {
  return x.reduce(function (x, y) {
    return Number(x) + Number(y);
  }, 0);
} // Multiply


function multiply(a, b) {
  return a * b;
} // Filter out the geese


function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(function (elm) {
    return !geese.includes(elm);
  }); // return an array containing all of the strings in the input array except those that match strings in geese
}

; // Lario and Muigi Pipe Problem

function pipeFix(numbers) {
  var arr = [];

  for (var _i6 = numbers[0]; _i6 <= numbers[numbers.length - 1]; _i6++) {
    arr.push(_i6);
  }

  return arr;
} // Sum The Strings


function sumStr(a, b) {
  return Number(a) + Number(b) + '';
} // Reversed Words


function reverseWords(str) {
  return str = str.split(' ').reverse().join(' ');
} // Odd or Even?


function oddOrEven(array) {
  return array.reduce(function (sum, item) {
    return sum + item;
  }, 0) % 2 == 0 ? 'even' : 'odd';
} // Find the smallest integer in the array


var SmallestIntegerFinder =
/*#__PURE__*/
function () {
  function SmallestIntegerFinder() {
    _classCallCheck(this, SmallestIntegerFinder);
  }

  _createClass(SmallestIntegerFinder, [{
    key: "findSmallestInt",
    value: function findSmallestInt(args) {
      var smallest = args[0];
      args.forEach(function (i) {
        return i < smallest && (smallest = i);
      });
      return smallest;
    }
  }]);

  return SmallestIntegerFinder;
}(); // Square(n) Sum


function squareSum(numbers) {
  var sum = 0;
  var square = numbers.map(function (item) {
    return item * item;
  });

  for (var _i7 = 0; _i7 < square.length; _i7++) {
    sum += square[_i7];
  }

  return sum;
} //  Grasshopper - Personalized Message


function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
} // Unique In Order


var uniqueInOrder = function uniqueInOrder(iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
}; // Regular Ball Super Ball


var Ball = function Ball(ballType) {
  if (ballType === undefined) {
    this.ballType = "regular";
  } else {
    this.ballType = "super";
  }
}; // A wolf in sheep's clothing


function warnTheSheep(queue) {
  var sheep = queue.length - queue.indexOf('wolf') - 1;

  if (sheep == 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!";
  }
} // Remove First and Last Character


function removeChar(str) {
  return str.substring(1, str.length - 1);
}

; //  Format a string of names like 'Bart, Lisa & Maggie'.

function list(names) {
  var srt = names.length;
  if (srt == 0) return '';
  return names.slice(0, srt - 1).map(function (item) {
    return item.name;
  }).join(", ") + (srt > 1 ? ' & ' : '') + names[srt - 1].name;
} //  What's the real floor?


function getRealFloor(n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n > 1 && n < 13) {
    return n - 1;
  } else if (n > 13) {
    return n - 2;
  } else if (n < 0) {
    return -Math.abs(n);
  }
} // Returning Strings


function greets(name) {
  return "Hello, " + name + " how are you doing today?";
} // Find the unique number


function findUniq(arr) {
  var strayChar = arr[0];
  if (strayChar !== arr[1] && strayChar !== arr[2]) return strayChar;

  for (var _i8 = 1; _i8 < arr.length; _i8++) {
    if (strayChar !== arr[_i8]) return arr[_i8];
  }
} // Count characters in your string


function count(string) {
  var count = {};
  string.split('').forEach(function (s) {
    count[i] ? count[s]++ : count[i] = 1;
  });
  return count;
} // Jenny's secret message


function greetss(name) {
  if (name === "Johnny") return "Hello, my love!";else return "Hello, " + name + "!";
} // Who likes it?


function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return names[0] + " likes this";
  if (names.length === 2) return names[0] + " and " + names[1] + " like this";
  if (names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
} // String ends with?


function solutions(str, ending) {
  return str.endsWith(ending);
} // Get the Middle Character


function getMiddle(s) {
  if (s.length % 2) {
    return s.substr(s.length / 2, 1);
  } else {
    return s.substr(s.length / 2 - 1, 2);
  }
} // Jaden Casing Strings


String.prototype.toJadenCase = function () {
  var result = this;

  if (this.length !== 0) {
    result = this.split(" ").map(function (word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
  }

  return result;
}; // Disemvowel Trolls


function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
} //  Nickname Generator


function nicknameGenerator(name) {
  return name.length < 4 ? "Error: Name too short" : /^[a-z]{2}[aeiou]/i.test(name) ? name.slice(0, 4) : name.slice(0, 3);
} // Array plus array


function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce(function (acc, cur) {
    return acc + cur;
  });
} // Century From Year


function century(year) {
  var century = Math.ceil(year / 100);
  return century;
} // Is it even?


function testEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
} // Basic Mathematical Operations


function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
} // Invert values


function invert(array) {
  return array.map(function (item) {
    return item >= 0 ? -Math.abs(item) : Math.abs(item);
  });
} // Sum of positive


function positiveSum(arr) {
  var sum = 0;

  for (var _i9 = 0; _i9 < arr.length; _i9++) {
    if (arr[_i9] > 0) {
      sum += arr[_i9];
    }
  }

  return sum;
} // Will you make it?


var zeroFuel = function zeroFuel(distanceToPump, mpg, fuelLeft) {
  return mpg * fuelLeft >= distanceToPump;

  if (zeroFuel > 1) {
    return true;
  } else {
    return false;
  }
}; // Multiple of index


function multipleOfIndex(array) {
  return array.filter(function (item, id) {
    return item % id === 0;
  });
} //  Flatten and sort an array


function flattenAndSort(array) {
  return array.reduce(function (acc, cur) {
    return acc.concat(cur);
  }, []).sort(function (a, b) {
    return a - b;
  });
} // Beginner - Lost Without a Map


function maps(x) {
  return x.map(function (item) {
    return item * 2;
  });
} // Convert boolean values to strings 'Yes' or 'No'.


function boolToWord(bool) {
  if (bool == 1) {
    return "Yes";
  } else {
    return "No";
  }
} //  Opposite number


function opposite(number) {
  return -1 * number;
} // Build Tower


function towerBuilder(nFloors) {
  return _toConsumableArray(Array(nFloors)).map(function (_, i) {
    return " ".repeat(nFloors - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(nFloors - 1 - i);
  });
} // Array comparator


function matchArrays(v, r) {
  return v.filter(function (v) {
    return r.includes(v);
  }).length;
} // Filter the number


var FilterString = function FilterString(value) {
  return parseInt(value.replace(/[a-z]/gi, ''));
}; // Say hello!


function greetw(name) {
  if (name == null || name.length == 0) return null;
  return "hello ".concat(name, "!");
} //  Blood Moon


function bloodMoon(r) {
  return r * r / 4;
} // Count the smiley faces!


function countSmileys(arr) {
  return arr.filter(function (item) {
    return item.match(/(:|;)(-|~)?(\)|D)/);
  }).length;
} // Create Phone Number


function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
} // Multiplication table


multiplicationTable = function multiplicationTable(size) {
  var array = [];

  for (var _i10 = 1; _i10 <= size; _i10++) {
    var item = [];

    for (var j = 1; j <= size; j++) {
      item.push(_i10 * j);
    }

    array.push(item);
  }

  return array;
}; // Sometimes


function sometimes(fn) {
  var i = 0;
  return function (a, b) {
    i++;

    if (i < 3) {
      return fn(a, b);
    }

    if (i % 2 !== 0) return fn(a, b);
    if (i % 2 === 0) return "hmm, I don't know!";
  };
} //MakeUpperCase 


function makeUpperCase(str) {
  return str.toUpperCase();
} //Remove duplicates from list


function distinct(a) {
  return _toConsumableArray(new Set(a));
} //Hello, Name or World!


function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return "Hello, World!";
  } else {
    return "Hello, ".concat(name[0].toUpperCase()).concat(name.substring(1).toLowerCase(), "!");
  }
} // Convert a Boolean to a String


function booleanToString(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
} // Volume of a Cuboid


var Kata =
/*#__PURE__*/
function () {
  function Kata() {
    _classCallCheck(this, Kata);
  }

  _createClass(Kata, null, [{
    key: "getVolumeOfCuboid",
    value: function getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
  }]);

  return Kata;
}(); // How good are you really?


function betterThanAverage(classPoints, yourPoints) {
  var sr = classPoints.reduce(function (a, b) {
    return a + b;
  }) / classPoints.length;

  if (sr > yourPoints) {
    return false;
  } else {
    return true;
  }
} // Even or Odd


function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  if (number % 2 !== 0) {
    return "Odd";
  }

  if (number === 0) {
    return "Even";
  }
} // // Reversed sequence
// const reverseSeq = n => {
//   arr = []
//   for(let i = n; i > 0; i--){
//    arr.push(i)
//   }
//   return arr
// };
// Convert a Number to a String!


function numberToString(num) {
  return num.toString();
} //Count of positives / sum of negatives


function countPositivesSumNegatives(input) {
  if (input == null || input.length < 1) {
    return [];
  }

  var pos = input.filter(function (x) {
    return x > 0;
  });
  var neg = input.filter(function (x) {
    return x <= 0;
  });
  var sum = neg.reduce(function (a, b) {
    return a + b;
  }, 0);
  return [pos.length, sum];
} //Counting sheep...


function countSheeps(arrayOfSheep) {
  var someOfSheep = arrayOfSheep.filter(function (item) {
    return item === true;
  });
  return someOfSheep.length;
} // Beginner Series #1 School Paperwork


function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  return n * m;
} //Incrementer 


function incrementer(nums) {
  return nums.map(function (value, index) {
    return (value + index + 1) % 10;
  });
} //Keep up the hoop 


function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
} // What is between?


function between(a, b) {
  var arr = [];

  for (i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
} //Grasshopper - Summation


function summation(num) {
  if (num == 1) {
    return 1;
  } else {
    return num + summation(num - 1);
  }
} //Function 2 - squaring an argument


var square = function square(n) {
  return Math.pow(n, 2);
}; //Opposites Attract


function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 1 && flower2 % 2 === 1) {
    return false;
  } else if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false;
  } else {
    return true;
  }
} // Vowel Count


function getCount(str) {
  var vowelsCount = 0;

  for (i = 0; i <= str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      vowelsCount++;
    }
  }

  return vowelsCount;
} // Simple remove duplicates


function solve(arr) {
  return arr.filter(function (item, i) {
    return arr.lastIndexOf(item) == i;
  });
} // Expressions Matter


function expressionMatter(a, b, c) {
  var i1 = a * (b + c);
  var i2 = a * b * c;
  var i3 = a + b * c;
  var i4 = (a + b) * c;
  var i5 = a + b + c;
  var arr = [];
  arr.push(i1, i2, i3, i4, i5);
  return Math.max.apply(Math, arr);
} //Grasshopper - Terminal game move function 


function move(position, roll) {
  var newPosition = position + roll * 2;
  return newPosition;
} //Grasshopper - Basic Function Fixer


function addFive(num) {
  var total = num + 5;
  return total;
} //Grasshopper - Variable Assignment Debug


var a = "dev";
var b = "Lab";
var nameGrasshopper = "".concat(a + b);