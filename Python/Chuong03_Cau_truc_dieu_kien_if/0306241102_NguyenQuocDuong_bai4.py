year = int(input("nhap vao 1 nam: "))
if((year%4==0 or year%400==0)and year%100!=0):print(f"{year} la nam nhuan")
else:print(f"{year} la nam khong nhuan")