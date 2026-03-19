#include"HaiToaDoKhongGianXY.h"

int main() {
    HaiToaDoKhongGian toaDo1;
    HaiToaDoKhongGian toaDo2(3.2, 4.2,3.3,4.7);


    toaDo1.nhap();
    toaDo1.xuat();
    cout << endl;
    toaDo2.xuat();

    return 0;
}
