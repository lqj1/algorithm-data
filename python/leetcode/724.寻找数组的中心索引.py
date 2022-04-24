'''
根据题意，那么有如下等式：数组总和 == 左侧数之和 + 中心序列 + 右侧数之和
那么我们只要遍历数组，然后 将当前数（中心序列）前面的数字求和（左侧数之和*2）再加上当前数字，判断其否等于数组总和就可以了
'''
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        numSum = sum(nums)
        tempSum = 0
        for i in range(len(nums)):
            if(i == 0):
                tempSum = 0
            else:
                tempSum += nums[i-1]
            if( (tempSum * 2 + nums[i]) == numSum ):
                return i
        return -1