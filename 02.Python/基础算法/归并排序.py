def merge_sort(A):
    length = len(A)
    if length <= 1:
        return A
    mid = length // 2
    # 递归拆分
    left_A = merge_sort(A[:mid])  #左右拆分，拆分成 n/2 的左半部分

    right_A = merge_sort(A[mid:])

    #print("leftA: ",left_A)
    #print("right_A: ",right_A)
    left_pointer, right_pointer = 0, 0
    result = []  
    while left_pointer < len(left_A) and right_pointer < len(right_A):
        if left_A[left_pointer] < right_A[right_pointer]:  #一开始比较的是54，26，所以执行的是 else 
            result.append(left_A[left_pointer])
            left_pointer += 1
        else:
            result.append(right_A[right_pointer])  
            right_pointer += 1
    
    result += left_A[left_pointer:] #将排好序的剩余元素插入result，左半区
    result += right_A[right_pointer:]
    return result

if __name__ == '__main__':
    data = [54, 26, 93, 17, 77, 31, 44, 55]
    print(data)
    lens = len(data)
    datas = merge_sort(data)
    print(datas)

