import random
secret_number =  random.randint(1,20)
temp = 0
print("Day la game doan so!")
print("Vui long nhap vao 1 so bat ki tu 1-20 de doan. Ban co toi da 5 lan thu.")
while True:
    guess = int(input(f"lan doan thu {temp+1}: "))
    temp+=1
    if guess==secret_number:
        print("Chuc mung, ban da doan trung roi!!! PHAN THUONG CUA BAN LA 1 O BANH MI~~~~")
        break
    elif guess<secret_number:
        print("So cua ban gan dung roi!!! Lon siu nua thoi")
    elif guess>secret_number:
        print("So cua ban gan dung roi!!! Nho siu nua thoi")
    if temp ==5:
        print(f"Doan sai 5 lan roi thang ngu. So bi mat la: {secret_number}")
        break