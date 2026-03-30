list = [1, 3, 5, 7, 2, 4, 6, 8]
x = 0
max1 = list[0]
for x in list:
    if max1 < x:
        max1 = x
print(f"So lon nhat: {x}")

max2 = float('-inf')
for x in list:
    if x > max2 and x < max1:
        max2 = x
print(f"so lon nhi: {max2}")

