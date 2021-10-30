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

  for (var i = 1; i <= row; i++) {
    var array2 = [];

    for (var j = 1; j <= col; j++) {
      array2.push(j * i);
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

      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i] * n);
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

  for (var i = 0; i < str.length; ++i) {
    for (var j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
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

  for (var i in vowels) {
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
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

  for (var i = 0; i <= n; i++) {
    for (var j = i; j <= n; j++) {
      arr.push([i, j]);
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

  for (var i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
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

  for (var i = 0; i < square.length; i++) {
    sum += square[i];
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
};