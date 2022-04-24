
def selectSort(arr):
    length = len(arr)
    for i in range(length-1):   #只需要将前面n-1个排好序，最后一个自然有序
        minIndex = i
        for j in range(i+1,length):
            if arr[j] < arr[minIndex]:
                minIndex = j   #找到比当前数更小的，将下标赋值为最小值的下标
        # for 循环之后的 minIndex 就是表示最小值的下标
        arr[i],arr[minIndex] = arr[minIndex],arr[i]

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    selectSort(data)
    print(data)