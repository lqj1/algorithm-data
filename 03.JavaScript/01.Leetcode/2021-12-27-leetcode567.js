/**
 * leetcode567: s1 = "ab" s2 = "eidbaooo" true;  s1= "ab" s2 = "eidboaoo" false;
 * @param s1
 * @param s2
 * @returns
 */
// 滑动窗口的题解
var minWindow = function (s, t) {
  // 要找的字符串t所需要的字符数;如要找子串ABC则 need = {A:1, B:1, C:1}
  let need = {};
  // 滑动窗口中的字符
  let window = {};
  for (const a of t) {
    need[a] = (need[a] || 0) + 1; // need[a]存在重复则加1，不存在初始化为1
  }
  // 定义左右指针
  let left = 0,
    right = 0;
  // 滑动窗口中的某一个字符和所需字符中相匹配的次数
  let valid = 0;
  // 最小覆盖子串的起始索引及长度
  let start = 0,
    len = Number.MAX_VALUE;
  while (right < s.length) {
    // 即将进入窗口的字符
    let c = s[right];
    // 向右移动
    right++;
    if (need[c]) {
      // 当前字符c在所需的字符中，更新窗口统计
      window[c] = (window[c] || 0) + 1;
      // 滑动窗口中的字符c数量已经达到所需字符need中的字符
      if (window[c] === need[c]) {
        valid++;
      }
    }
    // 当验证数量与需要的字符个数一样的时候，就开始收缩窗口
    while (valid === Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        // 记录最下子串的起始位置与长度
        start = left;
        len = right - left;
      }
      // 即将移出窗口的字符
      let d = s[left];
      // 左移窗口
      left++;
      // 如果所需字符中有该字符
      if (need[d]) {
        // 因为移出了，所以有效数需要减一
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len === Number.MAX_VALUE ? '' : s.substr(start, len);
};
