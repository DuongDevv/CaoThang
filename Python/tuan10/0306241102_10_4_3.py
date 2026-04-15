import datetime

log_file_name = "application_log.txt"

try:
    with open(log_file_name, "a", encoding="utf-8") as f:
        pass
except Exception as e:
    print(f"Khong the tao mo tep {log_file_name}: {e}")

def append_log(message):
    timetamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timetamp}] {message}\n"

    try:
        with open(log_file_name, "a", encoding="utf-8") as f:
            f.write(log_entry)
            print(f"Da ghi log: {message}")
    except IOError as e:
        print(f"Loi IO khi log vao tep `{log_file_name}`: {e}")
    except Exception as e:
        print(f"Loi! {e}")

append_log("Chương trình khởi động.")
append_log("Người dùng 'admin' đã đăng nhập.")
append_log("Đã xử lý dữ liệu X thành công.")
append_log("Lỗi: Không tìm thấy tài nguyên Y.")
append_log("Chương trình kết thúc.")

try:
    with open(log_file_name, "r", encoding="utf-8") as f:
        contend = f.read()
        print(contend)
except FileNotFoundError:
    print(f"Khong tim thay `{log_file_name}`")
