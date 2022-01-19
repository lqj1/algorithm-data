/**
 * @description: 2022年1月18日00:12:45 by lqj
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 704. 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
// 示例 1:

// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4
// 示例 2:

// 输入: nums = [-1,0,3,5,9,12], target = 2
// 输出: -1
// 解释: 2 不存在 nums 中因此返回 -1
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left; // 不使用 left + right 怕超出范围
    let num = nums[mid];
    console.log('mid', mid);
    if (target === num) {
      return mid;
    } else if (target < num) {
      right = mid - 1;
    } else if (target > num) {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 2));
