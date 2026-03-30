lst = ['one', 'two', 'three', 'four', 'five']
mapping = {'one': 1, 'three': 3, 'five': 5}
lst_result = []

for item in lst:
    if item in mapping:
        lst_result.append(mapping[item])
    else:
        lst_result.append(item)

print(lst_result)
