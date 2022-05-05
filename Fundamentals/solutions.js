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