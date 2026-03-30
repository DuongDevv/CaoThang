lst = [1, 2, (3, 4), 5, (6, 7), (8,9)]
count = 0

for item in lst:
    if isinstance(item, tuple):
        count += 1

print(count)  
