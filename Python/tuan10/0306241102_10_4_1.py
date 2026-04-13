file_name = "sample_txt"

try:
    with open(file_name,'w',encoding='utf-8') as f:
        f.write("Đây là dòng đầu tiên.\n")
        f.write("Đây là dòng thứ hai.\n")
        f.write("Đây là dòng thứ ba.\n")
        f.write("Đây là dòng cuối cùng.\n")
except Exception as e:
    print(f"Lỗi khi tạo file {file_name}: {e}")

try:
    with open(file_name,"r",encoding="utf-8") as f:
        contend = f.read()
        print(f"Nội dung của tệp {file_name}: ")
        print (contend)
except FileNotFoundError:
    print(f"Lỗi: Không tìm thấy file {file_name}")
except Exception as e:
    print(f"Lỗi khi đọc tệp {e}")

try:
    with open(file_name, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        print(f"Đọc từng dòng từ file {file_name}")
        for i, line in enumerate(lines):
            print(f"Dòng {i+1}: {line.strip()}")
except FileNotFoundError:
    print(f"Lỗi: Không tìm thấy file {file_name}")