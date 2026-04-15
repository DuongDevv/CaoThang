import json

person = "person.json"
product = "product.json"

def read_person():
    try:
        with open(person, "r", encoding="utf-8") as f:
            data = json.loads(f)
            print(f"Ten: {data.get('name')}")
            print(f"Tuoi: {data.get('age')}")
    except FileNotFoundError:
        print("Loi! Khong tin thay `person.json`")
    except Exception as e:
        print(f"Loi!: {e}")

def read_products():
    try:
        with open(product, "r", encoding="utf-8") as f:
            data = json.loads(f)

            for item in product:
                name = item.get("name")
                price = item.get("price")
                print(f"San pham: {name}\n Gia: {price} VND")
    except FileNotFoundError:
        print("Khong tim thay `product.json`")
    except Exception as e:
        print(f"Loi: {e}")

if __name__ == "__main__":
    read_person()
    read_products()
