#pragma once
#include<iostream>
using namespace std;
class HinhChuNhat
{
private:
	float Long;
	float wide;
public:
	HinhChuNhat() {
		this->Long = 0;
		this->wide = 0;
	}

	HinhChuNhat(float L, float w) {
		this->Long = L;
		this->wide = w;
		cout << "Khoi tao HinhChuNhat voi chieu dai: " << L << " va chieu rong: " << w << endl;
	}

	~HinhChuNhat() {
		cout << "Hinh chu nhat bi huy" << endl;
	}

	void nhap() {
		cout << "Nhap chieu dai:"; cin >> this->Long;
		cout << "Nhap chieu rong: "; cin >> this->wide;

	}
	void xuat() {
		cout << "Chieu dai la: " << this->Long << endl;
		cout << "Chieu rong la: " << this->wide << endl;
	}

	float dienTich() {
		return this->Long * this->wide;
	}

	float chuVi() {
		return (this->Long + this->wide) * 2;
	}
};
