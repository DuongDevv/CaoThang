#include"HinhTron.h"

int main() {
	HinhTron ht;
	ht.nhap();
	ht.xuat();
	float dt = ht.dientich();
	float cv = ht.chuvi();
	cout << "Dien tich la: " << dt << endl;
	cout << "Chu vi la: " << cv << endl;
	return 0;
}