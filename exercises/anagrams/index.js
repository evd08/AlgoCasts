// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let objStrA = charMap(stringA);
//   let objStrB = charMap(stringB);

//   if (Object.keys(objStrA).length !== Object.keys(objStrB).length) {
//     return false;
//   }

//   for (let char in objStrA) {
//     if (objStrA[char] !== objStrB[char]) return false;
//   }
  
//   return true;
// }

// function charMap(str) {
//   let obj = {};
//   str = str.replace(/[^\w]/g, '').toLowerCase();

//   for (let i=0; i<=str.length; i++){
//     let char = str[i];
//     obj[char] = obj[char] + 1 || 1;
//   }

//   // for (let char of str) {
//   //   obj[char] = obj[char]++ || 1;
//   // }

//   return obj;
// }

function anagrams(stringA, stringB) {
  debugger
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('RAIL! SAFETY!', 'fairy tales')

module.exports = anagrams;
