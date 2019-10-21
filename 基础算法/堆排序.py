
def heapify(arr, n, i):
    



def heapSort(arr):
    length = len(arr)
    # 构建最大堆
    for i in range(length,-1,-1):
        heapify(arr,n,i)

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    heapSort(data)
    print(data)