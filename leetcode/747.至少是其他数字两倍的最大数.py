'''
个人觉得python虽然精简，但有时候往往也可以让我们把关注力放在算法上面
而不用去纠结太多语言层面的东西
'''
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        maxNum = max(nums)
        for i,j in enumerate(nums):
            if j!=maxNum and maxNum<j*2:  #找到一个数，最大的数没有超过其两倍大，因此返回-1
                return -1
        #否则返回最大数的下标
        for i,j in enumerate(nums):
            if j==maxNum:
                return i
        