#include"PhanSo.h"

int main() {


    PhanSo ps1, ps2;
    cout << "Nhap phan so thu 1: " << endl;     
    cin >> ps1;
    cout << ps1;
    cout << "Nhap phan so thu 2: " << endl;         
    cin >> ps2;
    cout << ps2;
    cout << endl;
    PhanSo tong;
    tong = ps1.cong(ps2);
    cout << "Tong la: ";
    tong.xuat();

    return 0;
}
