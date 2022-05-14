// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }            
        }
    }
};
// or you can use a hashmap
function twoSum(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        let value = nums[i]
        let compValuePair = target - value
        if(map[compValuePair] !== undefined){
            return ([map[compValuePair], i])
        }else {
            map[value] = i
        }
    }
}
// or you can use a single for loop and if statements
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums.indexOf(target - nums[i]) !== -1 && i !== nums.indexOf(target - nums[i])){
            return [i, nums.indexOf(target - nums[i])]
        }
    }
}


// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

function fib(n) {
    if (n === 0){
        return 0
    }else if (n === 1){
        return 1
    }else if (n === 2){
        return 1
    }else if (n > 2){
        return fib(n-1) + fib (n-2)
    }
  };


// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {
    let min = prices[0]
    let profit = 0
    for (let i = 1; i < prices.length; i++){
        if (min < prices[i]){
            if(prices[i] - min > profit){
                profit = prices[i]  - min
            }
        }else min = prices[i]
    }
    return profit
};

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs){
    maxPrefixValue = Math.min(...strs.map(x => x.length))
    prefix = ''
    if(strs === []){
        return ""
    }
    for (let i = 0; i <maxPrefixValue; i++){
        if (strs.every( x => strs[0][i] === x[i])){
            prefix += strs[0][i]
        }else break
    }return prefix
};

// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// solution using hashmap
var containsDuplicate = function(nums) {
    let ans = false
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]] !== undefined){
            ans = true
            break
        }
        map[nums[i]] = 1
    }
    return ans
};

//solution by sorting and seeing if value at i is = next value
var containsDuplicate = function(nums) {
    let ans = false
    let sortedNums = nums.sort((a,b) => a-b )
    for (let i = 0; i < nums.length - 1; i++)
        if (sortedNums[i] === sortedNums[i+1]){
            ans = true;
            
        }
    return ans
};