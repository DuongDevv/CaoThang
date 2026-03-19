
#include<iostream>
#include<cmath>	
using namespace std;
class HaiToaDoKhongGian
{
private:
	float xA, yA, xB, yB;
public:

	HaiToaDoKhongGian() {
		this->xA = 0;
		this->xB = 0;
		this->yA = 0;
		this->yB = 0;
	}
	HaiToaDoKhongGian(float xa, float xb, float ya, float yb) {
		this->xA = xa;
		this->xB = xb;
		this->yA = ya;
		this->yB = yb;
	}
	~HaiToaDoKhongGian()
	{
		cout << "Hai toa do khong gian bi huy" << endl;
	}
	void nhap() {
		cout << "Nhap toa do diem A (xA, yA):" << endl;
		cout << "xA: ";
		cin >> xA;
		cout << "yA: ";
		cin >> yA;

		cout << "Nhap toa do diem B (xB, yB):" << endl;
		cout << "xB: ";
		cin >> xB;
		cout << "yB: ";
		cin >> yB;
	}
	float tinhKhoangCach() {
		return sqrt(pow(xB - xA, 2) + pow(yB - yA, 2));
	}


	void xuat() {
		cout << "Toa do diem A: (" << xA << ", " << yA << ")" << endl;
		cout << "Toa do diem B: (" << xB << ", " << yB << ")" << endl;
		float khoangCach = tinhKhoangCach();
		cout << "Khoang cach giua hai diem A va B la: " << khoangCach << endl;
	}

};

