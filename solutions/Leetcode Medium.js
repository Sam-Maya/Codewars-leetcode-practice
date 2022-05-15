// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
  let map = {}
  let max = 0
  let begin = 0
  for (let end = 0; end < s.length; end++){
      if(map[s[end]] !== undefined && begin <= map[s[end]]){
          begin = map[s[end]] + 1
      }
      map[s[end]] = end
      max = Math.max(max, end - begin + 1)
  }
  return max
};


// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
  let map = {}
  let sorted = strs.map( str => str.split('').sort().join(''))
  for (let i = 0; i < strs.length; i++){
      map[sorted[i]] === undefined ? map[sorted[i]] = [strs[i]] : map[sorted[i]].push(strs[i]);
  }
  return Object.values(map)
};