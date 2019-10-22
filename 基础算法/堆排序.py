
def heapify(arr, n, i):  #构建最大堆，从非叶子节点开始判断
    largest = i
    l = 2*i + 1  #left
    r = 2*i + 2  #right
    if l < n and arr[largest]<arr[l]:   #堆的左右节点位置可以不一样
        largest = l
    if r < n and arr[largest]<arr[r]:
        largest = r
    if largest != i:
        arr[i],arr[largest] = arr[largest],arr[i]
        heapify(arr,n,largest)  #每次调整完后需要从最后的该节点继续往前面判断

def heapSort(arr):
    length = len(arr)
    # 构建最大堆
    for i in range(length,-1,-1):
        heapify(arr,length,i)
    # 构建完之后就可以得到初始堆
    for i in range(length-1,0,-1):  #只需要排序到下标为1的数
        arr[0],arr[i] = arr[i],arr[0]  #此时的堆顶元素是最大的，将堆顶元素与最后一个元素交换
        heapify(arr,i,0)

if __name__ == '__main__':
    data = [16,7,3,20,17,8]
    print(data)
    heapSort(data)
    print(data)