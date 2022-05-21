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


// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
// Constraints:
// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

//Brute force solution
var topKFrequent = function(nums, k) {
  let map ={}
  let ans = []
  for(let i = 0; i < nums.length; i++){
      if(map[nums[i]] === undefined){
          map[nums[i]] = 0
      }
      map[nums[i]] += 1
  }
  for (let j = 0; j < k; j++){
      ans.push(Object.keys(map).reduce((max, current) => map[max] > map[current] ? max : current))
      delete map[String(ans[ans.length - 1])]
  }
  return ans
  
};


// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// a little messy but works in O(n)
var productExceptSelf = function(nums) {
  let prefix = [nums[0]]
  let postfix = [nums[nums.length-1]]
  let ans = []
  let acc = nums[0]
  for (let i = 1; i < nums.length; i++){
      acc = acc * nums[i]
      prefix.push(acc)
  }
  acc = nums[nums.length - 1]
  for (let j = nums.length - 2; j >= 0; j--){
      acc = acc * nums[j]
      postfix.unshift(acc)
  }
  for(let k = 0; k < nums.length; k++){
      if (k === 0){
          ans.push(postfix[k + 1])
          k++
      }if ( k === nums.length - 1){
          ans.push(prefix[nums.length - 2])
      }else ans.push(prefix[k-1] * postfix[k+1])
  }
  return ans
};


// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

var longestConsecutive = function(nums) {
  if(nums === null || nums.length === 0){
      return 0
  }
  let max = 1;
  let numsSet = new Set(nums);
  for (let num of numsSet){
      if (numsSet.has(num - 1)) continue;
      
      let currentNum = num
      let currentMax = 1
      while (numsSet.has(currentNum + 1)){
          currentMax++;
          currentNum++;
          max = Math.max(max, currentMax)
      }
  }
  return max
};


// 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

//optimal solution
function threeSum(nums){
  nums.sort((a,b) => a-b)
  let ans = []
  for(let i = 0; i < nums.length; i++){
      if(i > 0 && nums[i] === nums[i - 1]) continue;
      let target = 0 - nums[i];
      let left = i + 1;
      let right = nums.length - 1;
      while(left < right){
          let sum = nums[left] + nums[right];
          if(sum > target){
              right--;
          }else if(sum < target){
              left++;
          }else{
              ans.push([nums[left], nums[right], nums[i]])
              while(nums[left] === nums[left + 1]) left++;
              while(nums[right] === nums[right - 1]) right--;
              left++;
              right--;
              
          }
      }
  }
  return ans
};


// Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.
// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Brute force solution, exceeds leetcode time limit but...it does work
var maxArea = function(height) {
  if(height.length === 2){
      return Math.min(...height) * 1
  }
  let max = 0
  for (let left = 0; left < height.length - 2; left++){
      if(left !== 0 && height[left] <= height[left-1]) continue;
      for(let right = height.length - 1; right > left; right--){
          let current = 0
          if (height[right] < height[right + 1]) continue;
          if (height[left] < height[right]){
              current = height[left] * (right - left)
          }else if (height[left] > height[right]){
              current = height[right] * (right - left)
          }else current = current = height[left] * (right - left)
          max = Math.max(max, current)
      }
  }
  return max
};