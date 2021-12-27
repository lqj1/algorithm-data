/**
 * leetcode76: 输入: longStr = "ADOBECODEBANC", shortStr = "ABC", 输出: "BANC"
 * @param longStr 
 * @param shortStr 
 * @returns 
 */
function minWindow (longStr: string, shortStr: string): string {
  // 采用滑动窗口法，双指针
  // 当当前窗口包含shortStr中每种字符,并且个数不少于shortStr中，则‘窗口可用’并尝试收缩窗口

  // 定义扩张和收缩指针
  let right: number = 0,
      left: number = 0;
  // 定义结果(将最短可行窗口)
  let res: string = longStr + 'a';
  // 使用needsMap来存储子串shortStr中每个字符的个数
  const needsMap = new Map()
  for (let i: number = 0; i < shortStr.length; i++) {
    if (needsMap.has(shortStr[i])) {
      // 如果存在就在原来基础上+1
      needsMap.set(shortStr[i], needsMap.get(shortStr[i]+1));  
    } else {
      // 否则设置初始值为1
      needsMap.set(shortStr[i], 1);
    }  
  }
  // 上述构造的 needsMap = {A:1, B:1, C:1}
  // 窗口扩展函数,传入全局窗口和最右边新塞入的字符--funcion1
  const mapExpand = (_pMap: Map<string, number>, key: string) => {
    if (!_pMap.has(key)) {
      _pMap.set(key, 1);
    } else {
      _pMap.set(key, _pMap.get(key) + 1);
    }
  }
  // 窗口扩展函数--funcion1
  // 是否包含needsMap函数,传入当前全局窗口--function2
  const containNeeds = (_pMap: Map<string, number>): boolean => {
    // 构建所需子串Map的键的可遍历数组
    const needKeys: IterableIterator<string> = needsMap.keys();
    for (let needKey of needKeys) {
      if (!_pMap.has(needKey) || _pMap.get(needKey) < _pMap.get(needKey)) {
        // 当当前窗口中不包含需要的字符或者小于所需字符的个数，就返回false
        return false
      }
      return true
    }
  }
  // 是否包含needsMap函数--funcion2
  // 定义滑动窗口
  let globalMap: Map<string, number> = new Map();
  // 开始右边向右扩展
  while (right < longStr.length) {
    // globalMap窗口(longMap)向右扩展，向右塞进字符
    mapExpand(globalMap, longStr[right++]);
    // 判断当前窗口 globalMap 是否包含了所需数组 needsMap 中的 元素个数
    // 如果为可行的窗口，则左边开始收缩，找最小字符串的窗口(也就是最小子串)
    while (containNeeds(globalMap)) {
      // 如果是可行的，则需要左边向左收缩，寻找最小的可行窗口
      // 收缩的处理就是在全局窗口中，将longStr最左边的字符串减一
      globalMap.set(longStr[left], globalMap.get(longStr[left]) - 1)
      left++;
      console.log(res);
      console.log(left);
      console.log(right);
      console.log('\n');
      // 维护res
      res = res.length <= right - left ? res : longStr.slice(left - 1, right);
    }
    res = res.length === longStr.length + 1 ? '' : res;
    return res;
  }
}
// const result = minWindow("ADOBECODEBANC", "ABC")
// console.log('res', result);
