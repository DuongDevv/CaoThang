ds=list(map(int,input("Nhap vao 3 so: ").split()))
max_nhat = 0
max_nhi=0
if ds[0] >= ds[1] and ds[0] >= ds[2]:
    max_nhat = ds[0]
    if ds[1] >= ds[2]:
        max_nhi = ds[1]
    else:
        max_nhi = ds[2]
elif ds[1] >= ds[0] and ds[1] >= ds[2]:
    max_nhat = ds[1]
    if ds[0] >= ds[2]:
        max_nhi = ds[0]
    else:
        max_nhi = ds[2]
else:
    max_nhat = ds[2]
    if ds[0] >= ds[1]:
        max_nhi = ds[0]
    else:
        max_nhi = ds[1]
print(f"{max_nhi} la so lon nhi")
print(f"{max_nhat} la so lon nhat")
