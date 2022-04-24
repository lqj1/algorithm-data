
def binaryInsertSort(arr):
    length = len(arr)
    for i in range(1,length):
        pos = i
        left = 0
        right = i-1
        insertNum = arr[i]
        #如果直接插入遇到全部逆序的情况下，会对前面的数一一比较，这时候用二分插入就很有意义
        while left <= right:
            middle = (left + right)//2  #在python3里，/的结果是真正意义上的除法，结果是float型
            if arr[i] < arr[middle]:
                right = middle - 1
            else:
                left = middle + 1
        #将left后面的数字全部右移，空出left给插入的值
        while pos > left:
            arr[pos] = arr[pos-1]
            pos = pos-1
        arr[pos] = insertNum

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    binaryInsertSort(data)
    print(data)
