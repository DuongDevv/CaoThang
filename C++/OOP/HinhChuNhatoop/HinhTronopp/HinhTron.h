#pragma once
#include<iostream>
const double PI = 3.14;
using namespace std;

class HinhTron
{
private:
	float banKinh;
public:
	void nhap() {
		cout << "Nhap ban kinh: ";
		cin >> this->banKinh;
	}
	void xuat() {
		cout << "Ban kinh la: " << this->banKinh << endl;
	}
	float dientich() {
		return PI * pow(this->banKinh, 2);
	}
	float chuvi() {
		return 2 * PI * this->banKinh;
	}
};

