lst_1 = [1, 2, 3, 4, 5]
lst_2 = [1, 3, 5, 7]
lst_3 = [1, 2, 3]

lst_result = list(set(lst_1) & set(lst_2) & set(lst_3))

print(lst_result)
