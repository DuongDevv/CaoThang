# 1. Class Student
class Student:
    def __init__(self, name, age, grade):
        self.name = str(name)
        self.age = int(age)
        self.grade = float(grade)

    def display_info(self):
        status = "Đạt" if self.is_passing() else "Không đạt"
        print(f"Học sinh: {self.name} | Tuổi: {self.age} | Điểm: {self.grade} ({status})")

    def is_passing(self, passing_grade=5.0):
        return self.grade >= passing_grade


# 2. Class Car
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        self.speed = 0

    def accelerate(self, amount):
        self.speed += amount
        if self.speed > 200:
            self.speed = 200
        print(f"Tăng tốc: +{amount}. Tốc độ hiện tại: {self.speed} km/h")

    def brake(self, amount):
        self.speed -= amount
        if self.speed < 0:
            self.speed = 0
        print(f"Phanh: -{amount}. Tốc độ hiện tại: {self.speed} km/h")

    def get_info(self):
        return f"Xe {self.make} {self.model} - Tốc độ hiện tại: {self.speed} km/h"


# --- Kiểm tra hoạt động ---

# Thử nghiệm Class Student
print("--- THỬ NGHIỆM STUDENT ---")
s1 = Student("Nguyễn Văn A", 16, 7.5)
s2 = Student("Trần Thị B", 15, 4.5)
s1.display_info()
s2.display_info()

# Thử nghiệm Class Car
print("\n--- THỬ NGHIỆM CAR ---")
my_car = Car("Toyota", "Camry")
print(my_car.get_info())
my_car.accelerate(50)
my_car.accelerate(180) # Thử vượt quá 200
my_car.brake(30)
my_car.brake(300)      # Thử xuống dưới 0
print(my_car.get_info())
