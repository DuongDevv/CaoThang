# Lớp cha Account
class Account:
    def __init__(self, account_number, account_holder, initial_balance=0.0):
        self.account_number = account_number
        self.account_holder = account_holder
        self._balance = initial_balance # Sử dụng _ để gợi ýđây là thuộc tính "được bảo vệ"

    def get_balance(self):
        """Trả về số dư hiện tại."""
        return self._balance
    
    def deposit(self, amount):
        """Nạp tiền vào tài khoản."""
        if amount > 0:
            self._balance += amount
            print(f"Tài khoản {self.account_number}: Đã nạp {amount:,.2f} VNĐ. Số dư mới: {self._balance:,.2f} VNĐ")
        else:
            print("Số tiền nạp phải là số dương.")

    def withdraw(self, amount):
        """Rút tiền từ tài khoản."""
        if amount <= 0:
            print("Số tiền rút phải là số dương.") 
            return False
        if amount > self._balance:
            print("Số dư không đủ để rút tiền.")
            return False
        self._balance -= amount
        print(f"Tài khoản {self.account_number}: Đã rút {amount:,.2f} VNĐ. Số dư mới: {self._balance:,.2f} VNĐ")
        return True
    
    def display_info(self):
        """In thông tin tài khoản và số dư."""
        print(f"\n--- Thông tin Tài khoản ---")
        print(f"Số tài khoản: {self.account_number}")
        print(f"Chủ tài khoản: {self.account_holder}")
        print(f"Số dư: {self._balance:,.2f} VNĐ")
        print(f"---------------------------")


# Lớp con SavingsAccount (Kế thừa từ Account)
class SavingsAccount(Account):
    def __init__(self, account_number, account_holder,
        initial_balance=0.0, interest_rate=0.01):
        super().__init__(account_number, account_holder, initial_balance)  
        if not (0 <= interest_rate <= 1):
            raise ValueError("Lãi suất phải nằm trong khoảng 0 đến 1.")  
        self.interest_rate = interest_rate
        print(f"Tài khoản tiết kiệm {self.account_number} đã được tạo.")  

    def add_interest(self):
        """Cộng lãi vào số dư."""
        interest_amount = self._balance * self.interest_rate  
        self._balance += interest_amount
        print(f"Tài khoản {self.account_number}: Đã cộng lãi {interest_amount:,.2f} VNĐ. Số dư mới: {self._balance:,.2f} VNĐ") 

    def display_info(self): # Ghi đè để thêm thông tin lãi suất  
        super().display_info()
        print(f"Loại tài khoản: Tiết kiệm")
        print(f"Lãi suất: {self.interest_rate * 100:.2f}%") # Lớp con CheckingAccount (Kế thừa từ Account)

class CheckingAccount(Account):
    def __init__(self, account_number, account_holder, initial_balance=0.0, overdraft_limit=0.0):
        super().__init__(account_number, account_holder, initial_balance)  
        if overdraft_limit < 0:
            raise ValueError("Hạn mức thấu chi không thể âm.")  
        self.overdraft_limit = overdraft_limit
        print(f"Tài khoản vãng lai {self.account_number} đã được tạo.")  
        
    def withdraw(self, amount): # Ghi đè phương thức withdraw  
        """Rút tiền từ tài khoản, cho phép thấu chi."""  
        if amount <= 0:
            print("Số tiền rút phải là số dương.")
            return False
        # Kiểm tra nếu số tiền rút vượt quá số dư hiện có nhưng vẫn trong hạn mức thấu chi
        if self._balance - amount >= -self.overdraft_limit:  
            self._balance -= amount
            print(f"Tài khoản {self.account_number}: Đã rút {amount:,.2f} VNĐ. Số dư mới: {self._balance:,.2f} VNĐ")
            return True
        else:
            print(f"Số tiền rút vượt quá hạn mức thấu chi cho phép ({self.overdraft_limit:,.2f} VNĐ).")
            return False
    
    def display_info(self): # Ghi đè để thêm thông tin hạn mức thấu chi  
        super().display_info()
        print(f"Loại tài khoản: Vãng lai")
        print(f"Hạn mức thấu chi: {self.overdraft_limit:,.2f} VNĐ") 
        



print("\n--- TEST HỆ THỐNG NGÂN HÀNG ---")
# Tạo tài khoản tiết kiệm
savings1 = SavingsAccount("S001", "Nguyen Van A", 1000000, 0.03) # 1 triệu đồng, 3% lãi suất
savings1.display_info()
savings1.deposit(200000) 
savings1.withdraw(50000)
savings1.add_interest()
savings1.display_info()
# Tạo tài khoản vãng lai
checking1 = CheckingAccount("C001", "Tran Thi B", 500000, 100000) # 500k, thấu chi 100k
checking1.display_info()
checking1.withdraw(300000) # Rút trong giới hạn số dư
checking1.withdraw(300000) # Rút quá số dư, nhưng trong hạn mức thấu chi (-100k)
checking1.display_info()
checking1.withdraw(50000) # Rút quá hạn mức thấu chi
checking1.deposit(100000)
checking1.display_info()