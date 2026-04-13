ofn = "output.txt"

single_string = "Hello, Python File I/O! This is the first line.\n" \
                "This is the second line written as part of the same string."
try:
    with open(ofn, "w", encoding="utf-8") as f:
        f.write(single_string)
except IOError as e:
    print(f"Lỗi khi ghi tệp {ofn}: {e}")
try:
    with open(ofn, "r", encoding="utf-8")as f:
        contend = f.read()
        print(contend)
except FileNotFoundError:
    print(f"Lỗi! Không tìm thấy tệp {ofn}")
except Exception as e:
    print(f"Lỗi khi đọc tệp {ofn}")


nfn = "my_note.txt"
lol = [
    "Dòng ghi chú số 1.\n",
    "Dòng ghi chú số 2 với một vài thông tin.\n",
    "Dòng cuối cùng"
]
try:
    with open(nfn, "w", encoding="utf-8") as f:
        f.writelines(lol)
except IOError as e:
    print(f"Lỗi khi ghi tệp {nfn}: {e}")
try:
    with open(nfn, "r", encoding="utf-8") as f:
        contend = f.read()
        print(contend)
except FileNotFoundError:
    print(f"Lỗi! Không tìm thấy file {ofn}")
except Exception as e:
    print(f"Lỗi file không đọc được: {e}")


