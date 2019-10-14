def bubble_sort(arr):
    #这层循环是让数组每个数字找到位置，减一是因为后n-1排好，剩下的自然归位
    length = len(arr)
    for i in range(length-1):
        # 如果后面没有进行比较，则证明有序，直接返回，不需要再判断
        count = 0
        #这里是将最大的数字往后面冒泡
        for j in range(length-1-i):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]
                count +=1
        if count == 0:
            return
        
if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    bubble_sort(data)
    print(data)