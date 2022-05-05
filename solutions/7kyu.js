// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    let lettersArr = s.toUpperCase().split('')
    let ans = lettersArr[0]
    for (let i = 1; i < lettersArr.length; i++){
      ans = ans + '-' + lettersArr[i]
      for(let j = 0; j < i; j++)
        ans += lettersArr[i].toLowerCase()
    }
    return ans
  }
  
  // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
  
  // Examples:
  // Input: 42145 Output: 54421
  
  // Input: 145263 Output: 654321
  
  // Input: 123456789 Output: 987654321
  
  function descendingOrder(n){
    let ans = String(n).split('').sort((a,b) => b - a).join('')
    return Number(ans)
  }
  
  
  // Return the number (count) of vowels in the given string.
  
  // We will consider a, e, i, o, u as vowels for this Kata (but not y).
  
  // The input string will only consist of lower case letters and/or spaces.
  
  function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    for (let i = 0; i < str.length; i++){
      for(let j = 0; j < vowels.length; j++){
        str.charAt([i]) === vowels[j] ? vowelsCount +=1 : vowelsCount +=0
      }
    }
    return vowelsCount;
  }
  
  // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
  
  // Your task is to write a function maskify, which changes all but the last four characters into '#'.
  
  // Examples
  // "4556364607935616" --> "############5616"
  //      "64607935616" -->      "#######5616"
  //                "1" -->                "1"
  //                 "" -->                 ""
  
  // // "What was the name of your first pet?"
  
  // "Skippy" --> "##ippy"
  
  // "Nananananananananananananananana Batman!"
  // -->
  // "####################################man!"
  
  function maskify(cc) {
    let hash = ''
    for (let i = 0; i < cc.length - 4; i++){
     hash = hash.concat('', '#')
    }
    return `${hash}${cc.charAt(cc.length - 4)}${cc.charAt(cc.length - 3)}${cc.charAt(cc.length - 2)}${cc.charAt(cc.length - 1)}`
  }
  
  
  // We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
  
  // So given a string "super", we should return a list of [2, 4].
  
  // Some examples:
  // Mmmm  => []
  // Super => [2,4]
  // Apple => [1,5]
  // YoMama -> [1,2,4,6]
  // NOTES
  // Vowels in this context refers to: a e i o u y (including upper case)
  // This is indexed from [1..n] (not zero indexed!)
  
  function vowelIndices(word){
    let ans = []
    let vowels = 'aeiouyYAEIOU'
    for ( let i = 0; i <= word.length - 1; i++){
      vowels.includes(word.charAt([i])) ? ans.push(i + 1) : ans = ans
    }
    return ans
  }
  
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