month = int(input("nhap vao 1 thang: "))
while(month!=-1):
    if(month<1 or month>12):print("thang vua nhap khong hop le")
    else: print ("thang vua nhap hop le")
    month = int(input("nhap vao 1 thang (nhap -1 de dung): "))
