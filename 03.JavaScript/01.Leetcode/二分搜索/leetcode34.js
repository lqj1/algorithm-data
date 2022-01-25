/**
 * @description: 2022年1月24日00:15:05
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

/**
 * 分析： 利用到数组升序排列的条件，一般情况就使用二分查找
 * 考虑 target 开始和结束位置，其实我们要找的就是
 * 数组中「第一个等于 target 的位置」（记为leftIdx）
 * 和「第一个大于 target 的位置减一」（记为 rightIdx）。
 */
// flat为true表示查到
const binarySearch = (nums, target, flag) => {};

var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (condition) {
    }
  }
};
