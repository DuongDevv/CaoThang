tpl_init = (1, 2, 2, 3, 3, 3, 4, 4, 4, 4)
temp_list = []

for x in tpl_init:
    if x not in temp_list:
        temp_list.append(x)

tpl_result = tuple(temp_list)
print(tpl_result)  
