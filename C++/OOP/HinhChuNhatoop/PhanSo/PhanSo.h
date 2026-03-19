#pragma once
#include<iostream>
using namespace std;
class PhanSo
{
private:
	int tuSo;
	int mauSo;
	int timUCLN(int a, int b) {
		while (b != 0) {
			int temp = b;
			b = a % b;
			a = temp;
		}
		return a;
	}
public:
	PhanSo() {
		this->tuSo = 0;
		this->mauSo = 0;
	}
	PhanSo(int tuso, int mauso) {
		this->tuSo = tuso;
		this->mauSo = mauso;
	}
	~PhanSo() {
		cout << "Huy phan so: " << tuSo << " " << mauSo << endl;
	}

	int getTuSo() {
		return this->tuSo;
	}
	int getMauSo() {
		return this->mauSo;
	}

	void setTuSo(int tuSo) {
		 this->tuSo = tuSo;
	}
	void setMauSo(int mauSo) {
		this->mauSo = mauSo;
	}
	void nhap() {
		cout << "Nhap tu so: "; cin >> this->tuSo;
		cout << "Nhap mau so: "; cin >> this->mauSo;
	}
	void xuat() {
		cout << this->tuSo << "/" << this->mauSo << endl;
	}
	PhanSo cong(PhanSo ps2) {
		PhanSo ketQua;
		return ketQua;
	}

	PhanSo operator+(PhanSo ps2) {
		PhanSo ketQua;
		return ketQua;
	}

	friend istream& operator>>(istream& is, PhanSo& ps) {
		cout << "Nhap tu so: "; is >> ps.tuSo;
		cout << "Nhap mau so: "; is >> ps.mauSo;
		return is;
	}

	friend ostream& operator<<(ostream& os, PhanSo ps) {
		os << ps.tuSo << "/" << ps.mauSo << endl;
		return os;
	}

	PhanSo operator++() {
		PhanSo ketQua;
		ketQua.tuSo = this->tuSo + this->mauSo;
		ketQua.mauSo = this->mauSo;
		this->tuSo = ketQua.tuSo;
		this->mauSo = ketQua.mauSo;
		return ketQua;
	}

	PhanSo& operator++(int) {
		PhanSo ketQua;
		ketQua.tuSo = this->tuSo;
		ketQua.mauSo = this->mauSo;
		this->tuSo = this->tuSo + this->mauSo;
		this->mauSo = this->mauSo;
		return ketQua;
	}

	bool operator>(PhanSo ps2) {
		return this->tuSo * ps2.mauSo > this->mauSo * ps2.tuSo;
	}

	bool operator<(PhanSo ps2) {
		return this->tuSo * ps2.mauSo < this->mauSo * ps2.tuSo;
	}

	PhanSo tru(PhanSo ps2) {
		PhanSo hieu;
		hieu.tuSo = this->tuSo * ps2.mauSo - this->mauSo * ps2.tuSo;
		hieu.mauSo = this->mauSo * ps2.mauSo;
		PhanSo ketQua = hieu.rutGon();
		return ketQua;
	}

	PhanSo nhan(PhanSo ps2) {
		PhanSo tich;
		tich.tuSo = this->tuSo * ps2.tuSo;
		tich.mauSo = this->mauSo * ps2.mauSo;
		return tich.rutGon();
	}
	PhanSo chia(PhanSo ps2) {
		if (ps2.tuSo == 0) {
			cout << "Khong the chia cho phan so 0!" << endl;
			return PhanSo(0, 1);
		}
		PhanSo thuong;
		thuong.tuSo = this->tuSo * ps2.mauSo;
		thuong.mauSo = this->mauSo * ps2.tuSo;
		return thuong.rutGon();
	}

	PhanSo rutGon() {
		int ucln = timUCLN(abs(this->tuSo), abs(this->mauSo));
		PhanSo ketQua;
		ketQua.tuSo = this->tuSo / ucln;
		ketQua.mauSo = this->mauSo / ucln;
		if (ketQua.mauSo < 0) {
			ketQua.mauSo = -ketQua.mauSo;
			ketQua.tuSo = -ketQua.tuSo;
		}
		return ketQua;
	}

};
