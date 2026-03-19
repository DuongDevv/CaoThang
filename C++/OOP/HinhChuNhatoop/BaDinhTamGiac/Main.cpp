#include "TamGiac.h"

int main() {
	BaDinhTamGiac tg1;
	BaDinhTamGiac tg2(7, 8, 9);
	tg1.nhap();
	tg1.xuat();
	float cv = tg1.chuViTamGiac();
	float dt = tg1.dienTichTamGiac();
	cout << "Dien tich TamGiac la: " << dt << endl;
	cout << "Chuvi TamGiac la: " << cv << endl;
	return 0;

}
