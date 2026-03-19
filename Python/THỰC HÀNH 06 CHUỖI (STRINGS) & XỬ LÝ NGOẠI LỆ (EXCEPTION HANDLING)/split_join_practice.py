"""
Mục tiêu: Áp dụng split() và join() để phân tích và tổng hợp chuỗi.
Bài tập: Tạo file split_join_practice.py.
1. Cho một câu văn bất kỳ.
2. Sử dụng split() để tách câu thành danh sách các từ.
3. In ra danh sách các từ đó.
4. Sử dụng join() để nối lại các từ đó thành một câu mới, nhưng mỗi từ cách nhau bởi dấu _ (gạch dưới) thay vì dấu cách.
5. In ra câu mới. 
"""

sample_sentence = "Python is a powerful and easy-to-learn programming language."

words = sample_sentence.split()
print(f"Cau ban dau: '{sample_sentence}'")
print(f"Dannh sach cac tu: {words}")

new_sentence = "_".join(words)
print(f"Cau moi sau khi sua: '{new_sentence}'")
