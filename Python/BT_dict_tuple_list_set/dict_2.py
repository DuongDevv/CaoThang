lst = ['one', 'two', 'two', 'three', 'three', 'three']
dict_result = {}

for item in lst:
    if item in dict_result:
        dict_result[item] += 1
    else:
        dict_result[item] = 1

print(dict_result) 
