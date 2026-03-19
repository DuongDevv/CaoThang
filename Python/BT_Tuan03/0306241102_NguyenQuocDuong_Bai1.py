"""Viết chương trình tính chỉ số BMI (Body Mass Index).
    Yêu cầu người dùng nhập cân nặng (kg) và chiều cao (m).
    Sử dụng cấu trúc if/elif/else để phân loại BMI (Gầy, Bình thường, Thừa cân). """

print("Nhap vao chi so co the cua ban:")
cnang = float(input("Nhap vao so can nang: "))
m = float(input("Nhap vao chieu cao"))
while(cnang<1 and m<1):
    print("Nhap sai, can nang va chieu cao phai lon hon 0")
    cNang = float(input("Nhap vao so can nang: "))
    cCao = float(input("Nhap vao chieu cao"))
BMI = cNang / cCao**2
if(BMI>=25):print (f"Theo tieu chuan chau a thi BMI cua ban la: {BMI}Beo phi ")
elif (BMI>=23):print(f"Theo tieu chuan chau a thi BMI cua ban la: {BMI} Thua can")
elif(BMI>=18.5):print(f"Theo tieu chuan chau a thi BMI cua ban la: {BMI} Binh thuong ")
else:print(f"Theo tieu chuan chau a thi BMI cua ban la: {BMI} Thieu can")
