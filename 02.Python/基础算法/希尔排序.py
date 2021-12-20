
def shellSort(arr):
    length = len(arr)
    gap = length//2   #分组数
    while gap > 0:
        for j in range(gap,length):  #直接遍历分组后面的数
            i = j
            while i > 0:
                if arr[i] < arr[i-gap]:
                    arr[i],arr[i-gap] = arr[i-gap],arr[i]
                    i = i - gap
                else:
                    break
        gap = gap//2

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(data)
    shellSort(data)
    print(data)