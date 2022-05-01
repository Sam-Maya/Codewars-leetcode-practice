// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  let suits = '♣♦♥♠'
  if (card[card.length -1] === suits[0]){
    return 'clubs'
  }else if (card[card.length -1] === suits[1]){
    return 'diamonds'
  }else if (card[card.length -1] === suits[2]){
    return 'hearts'
  }else if (card[card.length -1] === suits[3]){
    return 'spades'
  }
}


// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
  let ans = []
  for (let i = 1; i <= size; i++){
    i%2 === 0 ? ans.push(0) : ans.push(1)
  }  
  return ans.join('')
}


// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
function isVow(a){
  const letters = 'aeiou'
  const ay = letters.charCodeAt([0])
  const ee = letters.charCodeAt([1])
  const iy = letters.charCodeAt([2])
  const oo = letters.charCodeAt([3])
  const uu = letters.charCodeAt([4])
  
  return a.map( (x) => {
    if (x === ay){
      return x = letters[0]
    }else if (x === ee){
      return x = letters[1]
    }else if (x === iy){
      return x = letters[2]
    }else if (x === oo){
      return x = letters[3]
    }else if (x === uu){
      return x = letters[4]
    }else return x
  })
}


// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

function array(arr){
  let newArr = arr.split(',')
  if (newArr.length < 3){
    return null
  }else {
    let trash = newArr.pop()
    let trash2 = newArr.shift()
    return newArr.join(' ')
  }
}


// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
function howMuchILoveYou(nbPetals) {
  let num = nbPetals
  while (num > 6){
    num -= 6
  }
  if ( num === 1){
    return 'I love you'
  }else if ( num === 2){
    return 'a little'
  }else if ( num === 3){
    return 'a lot'
  }else if ( num === 4){
    return 'passionately'
  }else if ( num === 5){
    return 'madly'
  }else if ( num === 6){
    return 'not at all'
  }else return err
}



// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input === null) {
    return []
  }
  let pos = input.filter( x => x > 0).length
  let negArr = input.filter( x => x < 0)
  let neg = negArr.reduce( (acc, c) => acc + c, 0)
  
  if (pos === 0 && neg !== 0){
    return [0, neg]
  }else if (pos !== 0 && neg === 0){
    return [pos, 0]
  }else if(pos === 0 && neg === 0){
    return []
  }else return [pos, neg]
}



// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let good = 0
  
  x.forEach( x => x === 'good' ? good ++ : good += 0)
  
  if ( good < 1 ){
    return 'Fail!'
  }else if (good <= 2){
    return 'Publish!'
  }else return 'I smell a series!'
}



// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArr = birds.filter( (x) => !geese.includes(x))
  return newArr
  // return an array containing all of the strings in the input array except those that match strings in geese
};


// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int)

function firstNonConsecutive (arr) {
  for (let i = 0; i< arr.length - 1; i++)
      if (arr[i+1] - arr[i] !== 1) {
          return arr[i+1]
      }
  return null
}

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// If you can, try writing it in only one line of code.

function findMultiples(integer, limit) {
  //your code here
    let answer = []
    let i = 1
    while (i * integer <= limit){
        answer.push(i * integer)
        i ++
    }
    return answer
}




// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip=(d, c)=>{
  if (d.toLowerCase() === 'r'){
    c = c.sort(function (a, b) { return a - b; })
  }else if (d.toLowerCase() === 'l'){
    c = c.sort(function (a, b) {  return b - a; })
  } return c
}