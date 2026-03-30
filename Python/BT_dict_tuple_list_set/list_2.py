lst_init = [1, 2, 3, 4, 5, 6]

lst_del = [1, 3, 7]
lst_result = [x for x in lst_init if x not in lst_del]

print(lst_result)


