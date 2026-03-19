n = int(input("Nhap vao bien so xe cua ban (gom 5 chu so): "))
count = 0

while(n>0):
    count+=n%10
    n//=10

if(count>10):
    count%=10

print(count)