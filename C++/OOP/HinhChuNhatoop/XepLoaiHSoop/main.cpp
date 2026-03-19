#include "HocSinh.h"
using namespace std;

int main() {
   
    XepLoaiHS hs1;
    hs1.nhap();
    hs1.xuat();
    cout << "Diem trung binh: " << hs1.diemTB() << endl;
    cout << "Xep loai: " << hs1.xepLoai() << endl;

    cout << "--------------------" << endl;

  
    XepLoaiHS hs2("Nguyen Van A", 8.0, 7.5);
    hs2.xuat();
    cout << "Diem trung binh: " << hs2.diemTB() << endl;
    cout << "Xep loai: " << hs2.xepLoai() << endl;

    return 0;
}
