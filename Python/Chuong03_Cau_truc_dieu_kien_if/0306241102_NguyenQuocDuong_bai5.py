ds = list(map(int,input("Nhap vao 3 so nguyen: ").split()))
min = ds[0]
if(ds[1]<min):min=ds[1]
elif(ds[2]<min):min=ds[2]
print(f"so nho nhat la: {min}")