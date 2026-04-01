class BankAccount:
    def __init__(self, initial_balance=0):
        # Thuộc tính private (có 2 dấu gạch dưới phía trước)
        self.__balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            print(f"Nạp thành công: +{amount}. Số dư hiện tại: {self.__balance}")
        else:
            print("Số tiền nạp phải lớn hơn 0.")

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            print(f"Rút thành công: -{amount}. Số dư hiện tại: {self.__balance}")
        else:
            print("Số dư không đủ hoặc số tiền không hợp lệ.")

    def get_balance(self):
        return self.__balance
    
    def __str__(self):
        return f"Tài khoản Ngân hàng [Số dư hiện tại: {self.__balance:,} VNĐ]"

# Kiểm tra hoạt động
acc = BankAccount(1000)
acc.deposit(500)     
acc.withdraw(200)    
# Thử truy cập trực tiếp (Sẽ bị lỗi)
# print(acc.__balance) 

# Kiểm tra hoạt động
my_acc = BankAccount(1000000)
print(my_acc)

my_acc.deposit(500000)
print(my_acc) 

