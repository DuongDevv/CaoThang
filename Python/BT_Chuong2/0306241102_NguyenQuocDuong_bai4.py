n = int(input("Nhap vao so gom 3 chu so: "))
temp = int(0)
while (n>0):
    temp+=n%10
    n=n//10

print(f"{temp/3}")
