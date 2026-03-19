#include"HinhChuNhat.h"

int main() {
	HinhChuNhat hcn1;
	HinhChuNhat hcn2(10.5, 5.3);

	hcn1.nhap();
	hcn1.xuat();
	float dt = hcn1.dienTich();
	float cv = hcn1.chuVi();
	cout << "Dien tich la: " << dt << endl;
	cout << "Chu vi la: " << cv << endl;
	return 0;
}
