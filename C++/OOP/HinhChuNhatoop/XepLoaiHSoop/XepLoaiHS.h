#pragma once
#include<iostream>
#include<string>
using namespace std;
class XepLoaiHS
{
private:
	string HoTen;
	float dToan;
	float dVan;
public:
	XepLoaiHS() {
		this->HoTen = "";
		this->dToan = 0;
		this->dVan = 0;
	}
	XepLoaiHS(string ht, float dt, float dv) {
		this->HoTen = ht;
		this->dToan = dt;
		this->dVan = dv;
	}
	~XepLoaiHS() {
		cout << "Huy hoc sinh" << endl;
	}

	void nhap() {
		cout << "Nhap HoTen: ";

		getline(cin, this->HoTen);
		cout << "Nhap diem Toan: "; cin >> this->dToan;
		cout << "Nhap diem Van: "; cin >> this->dVan;
	}

	float diemTB() {
		return (this->dToan + this->dVan) / 2;
	}
	void xuat() {
		cout << "Ho ten HS: " << this->HoTen << endl;
		cout << "diem toan la: " << this->dToan << endl;
		cout << "diem van la: " << this->dVan << endl;
	}

	string xepLoai() {
		if (diemTB() >= 7.5)return "Loai gioi";
		else if (diemTB() >= 5)return "Loai kha";
		else if (diemTB() >= 3.5)return "Loai kem";
		else return "Loai yeu";
	}
};
	
