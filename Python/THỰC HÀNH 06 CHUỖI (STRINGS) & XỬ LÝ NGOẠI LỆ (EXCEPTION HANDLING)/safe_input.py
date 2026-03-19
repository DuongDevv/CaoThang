"""
Mục tiêu: Tạo hàm an toàn hơn với xử lý lỗi.
Bài tập: Tạo file safe_input.py. 
– Viết hàm get_positive_integer(prompt): 
• Hàm này nhận một chuỗi prompt ("Nhập một số nguyên dương: ") làm tham số. 
• Sử dụng vòng lặp while True và try-except để liên tục yêu cầu nhập số. 
• Nếu người dùng nhập không phải số nguyên, bắt ValueError và in thông báo lỗi. 
• Nếu số nguyên âm hoặc 0, in thông báo lỗi và tiếp tục vòng lặp. 
• Chỉ khi người dùng nhập đúng một số nguyên dương, hàm mới trả về số đó. 
"""

def get_positive_integer(prompt):
    while True:
        try:
            user_input = input(prompt)
            number = int(user_input)
            if number <= 0:
                print("Loi! So nguyen duong > 0. Nhap lai!")
            else:
                return number
        except ValueError:
            print("Loi! Vui long nhap 1 so nguyen. Nhap lai")  
        except Exception as e:
            print(f"Da xay ra loi: {e}")

