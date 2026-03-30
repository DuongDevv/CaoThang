lst = [123, 456, 'test']
tong_digit = 0

for item in lst:
    if isinstance(item, (int, float)):
        s = str(abs(item)) 
        for char in s:
            if char.isdigit():
                tong_digit += int(char)

print(tong_digit)
