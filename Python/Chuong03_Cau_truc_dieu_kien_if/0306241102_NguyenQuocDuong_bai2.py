ds = list(map(int,input("Nhap vao 5 so: ").split()))
countDuong = 0
countAm = 0
countKhong = 0
if(ds[0]>0):countDuong+=1
elif(ds[0]<0):countAm+=1
else: countKhong+=1

if(ds[1]>0):countDuong+=1
elif(ds[1]<0):countAm+=1
else: countKhong+=1

if(ds[2]>0):countDuong+=1
elif(ds[2]<0):countAm+=1
else: countKhong+=1

if(ds[3]>0):countDuong+=1
elif(ds[3]<0):countAm+=1
else: countKhong+=1

if(ds[4]>0):countDuong+=1
elif(ds[4]<0):countAm+=1
else: countKhong+=1
print(f"co {countDuong} so duong")
print(f"co {countAm} so am")
print(f"co {countKhong} so khong")
