# Lớp cha Animal
class Animal:
    def __init__(self, name):
        self.name = name
        print(f"Animal '{self.name}' created.")

    def make_sound(self):
        print("Some generic sound.")

# Lớp con Dog
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name) # Gọi constructor của lớp cha Animal  
        self.breed = breed
        print(f"Dog '{self.name}' ({self.breed}) created.")  

    def make_sound(self): # Ghi đè phương thức
        super().make_sound() # Có thể gọi phương thức của lớp cha nếu muốn
        print("Woof! Woof!")

    def fetch(self):
        print(f"{self.name} is fetching the ball.")


# Lớp con Cat
class Cat(Animal):
    def __init__(self, name, fur_color):
        super().__init__(name) # Gọi constructor của lớp cha Animal  
        self.fur_color = fur_color
        print(f"Cat '{self.name}' ({self.fur_color} fur) created.")  

    def make_sound(self): # Ghi đè phương thức
            print("Meow! Meow!")

    def scratch_furniture(self):
        print(f"{self.name} is scratching the furniture.")


# --- Thực hành tạo và gọi phương thức ---
print("\n--- TEST ANIMAL CLASSES ---")
my_dog = Dog("Rex", "German Shepherd")
my_cat = Cat("Luna", "White")
my_dog.make_sound()
my_cat.make_sound()
my_dog.fetch()
my_cat.scratch_furniture()

print("\n--- THỰC HÀNH KẾ THỪA & ĐA HÌNH: SHAPE ---") 
import math
# Lớp cha Shape
class Shape:
    def __init__(self, color):
        self.color = color

    def get_color(self):
        return self.color
    
    def calculate_area(self):
    # Đây là một phương thức trừu tượng, lớp con phải ghi đè nó  
    # # Nếu không ghi đè và gọi nó, sẽ báo lỗi
        raise NotImplementedError("Subclasses must implement calculate_area method.")
    
# Lớp con Circle
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        if radius <= 0:
            raise ValueError("Bán kính phải dương.")
        self.radius = radius
        
    def calculate_area(self): # Ghi đè phương thức calculate_area  
        return math.pi * (self.radius ** 2) 
    
# Lớp con Rectangle
class Rectangle(Shape):
    def __init__(self, color, width, height):
        super().__init__(color)
        if width <= 0 or height <= 0:
            raise ValueError("Chiều rộng và chiều cao phải dương.") 
        self.width = width
        self.height = height

    def calculate_area(self): # Ghi đè phương thức calculate_area  
        return self.width * self.height
    

# --- Thực hành tạo đối tượng và tính diện tích ---
print("\n--- TEST SHAPE CLASSES ---")
circle1 = Circle("Red", 5)
rectangle1 = Rectangle("Blue", 4, 6)
print(f"Hình tròn màu {circle1.get_color()} với bán kính{circle1.radius}. Diện tích: {circle1.calculate_area():.2f}") 
print(f"Hình chữ nhật màu {rectangle1.get_color()} với chiều rộng {rectangle1.width}, chiều cao {rectangle1.height}. Diện tích: {rectangle1.calculate_area()}")

# Minh họa tính đa hình
shapes = [Circle("Green", 3), Rectangle("Yellow", 2, 8), Circle("Purple", 1.5)]
print("\n--- Tính diện tích các hình từ một list ---")
for shape in shapes:
 # Python sẽ tự động gọi phương thức calculate_area() phù hợp với từng loại đối tượng
    print(f"Diện tích của hình {shape.get_color()}:{shape.calculate_area():.2f}")
    try:
        generic_shape = Shape("Black")
        generic_shape.calculate_area() # Sẽ gây lỗi NotImplementedError #
    except NotImplementedError as e:
        print(f"\nCaught an error: {e}") 