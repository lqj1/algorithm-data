def quick_sort(nums, left, right):
    if left >= right:
        return
    pivot = nums[left]
    low = left
    high = right
    while low < high:
        while low < high and nums[high] > pivot: #一直遍历到右边找到一个 小于基准数的
            high = high-1
        nums[low] = nums[high]  #将这个数和基准数对换，【错了，不是对换】，是直接用小于基准的数去覆盖那个基准数
        while low < high and nums[low] < pivot: #一直遍历到左边找到一个 大于基准数的
            low = low+1
        nums[high] = nums[low]  #每次赋值后，空出来的位置原本应该是放 pivot 的，前面把high位置的值拿走了，所以这里刚好填上了
    #每次 while循环后，最终会以 pivot为中心，形成 左边小于它，右边大于它的数组，且low是等于high的
    nums[low] = pivot  #将空的位置用pivot填上
    #再用 分治法
    quick_sort(nums,left,low-1)
    quick_sort(nums,low+1,right)

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    lens = len(data)
    quick_sort(data, 0, lens-1)
    print(data)
