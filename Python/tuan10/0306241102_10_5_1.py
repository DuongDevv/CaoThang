import json

person_data = {
    "name": "Nguyen Van A",
    "age": 102,
    "city": "Thanh Hoa",
    "is_student": False
}
person_file = "person.json"
try:
    with open(person_file, "w", encoding="utf-8") as f:
        json.dump(person_data, f, indent=4, ensure_ascii=False)
    print(f"Da luu thong tin vao `{person_file}`")
except IOError as e:
    print(f"Loi khong luu duoc `{person_file}`: {e}")
try:
    with open(person_file, "r", encoding="utf-8") as f:
        content = f.read()
        print(content)
except FileNotFoundError:
    print(f"Loi! Khong tim thay file `{person_file}`")



#PRODUCT
product_data = [
    {"id": "P001", "name": "Laptop Dell XPS", "price": 1500.00, "quantity": 5},
    {"id": "P002", "name": "Chuột Logitech", "price": 35.50, "quantity": 100}
]
product_file = "product.json"
try:
    with open(product_file, "w", encoding="utf-8") as f:
        json.dump(product_data, f, indent=4, ensure_ascii=False)
    print(f"Da lu danh sach vao `{product_file}`")
except IOError as e:
    print(f"Loi khi luu `{product_file}`: {e}")
try:
    with open(product_file, "r", encoding="utf-8") as f:
        content = f.read()
        print(content)
except FileNotFoundError:
    print(f"Loi! Khong tim thay file `{product_file}`")