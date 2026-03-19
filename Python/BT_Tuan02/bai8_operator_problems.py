"""print("===KIEM TRA CHAN/LE===")
num = input("Nhap vao 1 so nguyen: ")
try:
    so_nguyen = int(num)
    if(so_nguyen%2==0): 
        print(f"{so_nguyen} la so chan")
    else:
        print(f"{so_nguyen} la so le")
except ValueError:
    print(f"Vui long nhap lai, vi {so_nguyen} khong phai la so nguyen ")"""


print("===SO SANH TUOI===")
nv1 = input("Nhap vao so tuoi cua nguoi thu nhat: ")
nv2 = input("Nhap vao so tuoi cua nguoi thu hai: ")
try:
    user1= int(nv1)
    user2 =int(nv2)
    if(user1 == user2):print("Hai nguoi bang tuoi")
    elif(user1>user2):print("Nguoi thu nhat lon tuoi ho nguoi thu hai")
    else:print("Nguoi thu hai lon tuoi ho nguoi thu nhat")
except ValueError:
    print("Vui long nhap lai (tuoi>0) ")
