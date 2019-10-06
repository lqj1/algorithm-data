'''
这里用到python的逆序遍历，类似于C++语言中 for(i = len; i >= 0; --i)
for i in range(len, -1, -1)
第一个-1表示遍历到0时循环结束
第二个-1表示遍历过程每次减去1，也即步长为 -1
'''
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        for i in range(len(digits)-1, -1, -1):
            if(digits[i] == 9):
                digits[i] = 0
            else:
                digits[i] += 1   #python没有 ++ 自增运算符
                return digits
        if digits[0] == 0:
            digits.insert(0,'1')
        return digits