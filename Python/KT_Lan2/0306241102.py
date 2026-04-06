"""
Nguyễn Quốc Đương
0306241102
CĐ CNTT 24WEBC
"""

# Khai báo thư viện
# Khai báo biến
# Định nghĩa hàm

def deleteiTh(string: str, iTh: int):
    if iTh < 0 or iTh >= len(string):
        return string
    return string[:iTh] + string[iTh+1:]

def replace(str1: str):
    temp = str1.replace(",", "temp")   
    temp = temp.replace(".", ",")
    temp = temp.replace("temp", ".")
    return temp

def countUniqueValue(inputList: list):
    return len(set(inputList))

def interSec(dict1: dict, dict2: dict):
    result = {}
    for i in dict1:
        if i in dict2 and dict1[i] == dict2[i]:
            result[i] = dict1[i]
    return result

def convertStrToDict(inputStr: str):
    res = {}
    for i in inputStr:
        if i in res:
            res[i] += 1
        else:
            res[i] = 1
    return res

def canReplace(str1: str, str2: str):
    res1 = convertStrToDict(str1)
    res2 = convertStrToDict(str2)
    for i in res1:
        if i not in res1 or res1[i] > res2[i]:
            return False
    return True

def countLine(fileName: str):
    pass

# Hàm main
def main():
    print(f"Câu 1: {deleteiTh("iloveprogramming", 0)}")
    print(f"Câu 2: {replace("1,234,567.89")}")            
    print(f"Câu 3: {countUniqueValue([1, 2, 3, 4, 5, 5, 6, 6])}")   
    print(f"Câu 4: {interSec({'a':2,'b':2,'c':2}, {'a':1,'b':2,'c':2})}")
    print(f"Câu 5: {convertStrToDict("XinChaoLop21WebC")}")      
    print(f"Câu 6: {canReplace("aabbccdd", "waaeiburccqo")}")   
    # print(countLine('0306241102.py'))

# Gọi hàm main
if __name__ == "__main__":
    main()
