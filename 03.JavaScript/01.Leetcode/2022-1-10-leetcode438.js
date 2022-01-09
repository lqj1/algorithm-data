/**
 * @description:
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 要找的字符串t所需要的字符数;如要找子串ABC则 need = {A:1, B:1, C:1}
  let need = {};
  // 滑动窗口
  let window = {};
  for (const a of p) {
    need[a] = (need[a] || 0) + 1;
  }
  let left = 0,
    right = 0;
  let valid = 0;
  let res = [];
  while (right < s.length) {
    // 即将移入窗口的字符
    let c = s[right];
    // 右移窗口
    right++;
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        // 当前窗口和需要的字符匹配时，验证数量增加1
        valid++;
      }
    }
    while (right - left >= t.length) {
      if (valid == Object.keys(need).length) {
        res.push(left);
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return res;
};
