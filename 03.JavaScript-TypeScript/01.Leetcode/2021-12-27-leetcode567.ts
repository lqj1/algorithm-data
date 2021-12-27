/**
 * leetcode567: s1 = "ab" s2 = "eidbaooo" true;  s1= "ab" s2 = "eidboaoo" false;
 * @param s1 
 * @param s2 
 * @returns 
 */
function checkInclusion (s1: string, s2: string): boolean {
  let left: number = 0,
    right: number = 0;
  let window: Record<string, number> = {}; // 定义全局窗口，Record类型
  let s1map: Record<string, number> = {}; // 定义统计s1中字符串出现的次数，Record类型
  let valid = 0;
  for (let c of s1) {
    s1map[c] = s1map[c] ? s1map[c] + 1 : 1; // 如果存在字符就+1，第一次出现出现赋值为1
    window[c] = 0;
  }
  // 上述结果为，s1map = {a:1,b:1}, window = {a:0,b:0}
  let size = Object.keys(s1map).length; // 获取s1不重复字符的长度
  while(right < s2.length){
      let char = s2[right];
      right++;
      if(window[char] !== undefined){
          window[char]++;
          if(window[char] === s1map[char]){  // 表示全局窗口中有一个字符已经满足要求
              valid += 1;
          }
          // console.log(window, valid)
          if(valid === size){  // 全局窗口中所有字符都满足要求了返回
              return true;
          }
      }
      if(right - left === s1.length){
          let lchar = s2[left];
          left++
          if(window[lchar] !== undefined){
              if(window[lchar] === s1map[lchar]){
                  valid -= 1
              }
              window[lchar]--;
          }
      }
  }
  return false;
};