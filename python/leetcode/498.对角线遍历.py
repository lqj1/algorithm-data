class Solution:
    def findDiagonalOrder(self, matrix: List[List[int]]) -> List[int]:
        if(len(matrix) == 0 or len(matrix[0]) == 0):
            return []
        row = len(matrix)  
        col = len(matrix[0])
        nums = row*col
        r = c = 0
        res = []
        flag = True                     # 已知只有两种前进方向，flag->True:右上方向，False:左下方向，记得true首字母大写
        # 遍历访问数组中所有的数
        for i in range(nums):
            print(r)
            print(c)
            print("num:",matrix[r][c])
            print("test")
            res.append(matrix[r][c])
            #正常情况
            if flag:                    # 往右上角走
                r -= 1
                c += 1
            else:                       # 往左下角走
                r += 1
                c -= 1
            #遇到边界，判断是否超出最大行列
            if c > col-1:               # 3->6的情况，此时不需要判断行小于0，本应走到右上角，需要将行加2，列减1
                c -= 1
                r += 2
                flag = False
            if r > row -1:              # 8->9，走到左下角，需要将列加2，行减1
                r -= 1
                c += 2
                flag = True
            #遇到边界，判断行列是否小于0
            if r < 0:                   # 1->2的情况，此时行-1，列+1，只需要将行加1，就定位到2
                r += 1
                flag = False            # 往左下走
            if c < 0:                   # 4->7的情况
                c += 1
                flag = True             # 右上           
        return res