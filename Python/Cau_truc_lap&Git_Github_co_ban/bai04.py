print("So nguyen to tu 1 den 50 la: ")
for i in range(2, 51):
    for j in range(2, i):
        if i % j == 0:
            break
    else: 
        print(i, end=" ")