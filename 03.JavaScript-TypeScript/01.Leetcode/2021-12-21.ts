function minWindow(s: string, t: string): string {
  // 采用滑动窗口法，双指针
  // 当窗口包含t中每种字符,并且个数不少于t中，则‘窗口可用’并尝试收缩窗口

  // 定义扩张和收缩指针
  let fastIndex: number = 0,
      slowIndex: number = 0;
  // 定义结果(将最短可行窗口)
  let res: string = s + 'a';
  // 使用map来标识t中每个字符的个数
  const sMap = new Map();
  for (let i: number = 0; i < t.length; i++) {
    // 在哈希表中存在则在原来的基础上加1，否则值置为1
    if (sMap.has(t[i])) sMap.set(t[i], sMap.get(t[i]) + 1);
    else sMap.set(t[i], 1);
  }
  // 定义_sMap更新的操作
  const mapAdd = (_sMap: Map<string, number>, key: string) => {
    if (!_sMap.has(key)) _sMap.set(key, 1);
    else _sMap.set(key, _sMap.get(key) + 1);
  };

  // 定义判断窗口是否可行
  const isGood = (_sMap: Map<string, number>): boolean => {
    const keys: IterableIterator<string> = sMap.keys();
    for (let key of keys) {
      if (!_sMap.has(key) || _sMap.get(key) < sMap.get(key)) return false;
    }
    return true;
  };
  let _sMap: Map<string, number> = new Map();

  while (fastIndex < s.length) {
    // 窗口(_sMap)扩展
    mapAdd(_sMap, s[fastIndex++]);
    //  判断是否为‘可行窗口’,如果为可行窗口，slowIndex进行收缩，寻找本轮最小窗口
    while (isGood(_sMap)) {
      // 可行窗口(_sMap)收缩
      _sMap.set(s[slowIndex], _sMap.get(s[slowIndex]) - 1);
      slowIndex++;
      // console.log(res, fastIndex, slowIndex)
      // 维护res
      res = res.length <= fastIndex - slowIndex ? res : s.slice(slowIndex - 1, fastIndex);
    }
  }
  res = res.length === s.length + 1 ? '' : res;
  return res;
}
