# Buoi 1
#### Bai 1 
```c
#include <iostream>
using namespace std;
int main() {
	
	while (true) {
		int n, dem = 0;
		cout << "Nhap vao mot so nguyen duong (-1 de ket thuc): ";
		cin >> n;
		if (n == -1)break; 
		while (n != 0) { n /= 10; dem++; }
		cout <<"so "<< n<<" co "<< dem << " ky so " << endl;
	}


}

```
#### Bai 2 
```c
#include <iostream>
using namespace std;
int main() {
	while (true) {
		int n, max, kyso, min;
		cout << "Nhap vao so nguyen duong (-1 de ket thuc): ";
		cin >> n;
		if (n == -1);
		max = n % 10;
		min = n % 10;
		while (n != 0) {
			kyso = n % 10; n /= 10;
			if (kyso > max)max = kyso;
			else min =kyso;

		}
		cout << "ky so lon nhat la: " << max << endl;
		cout << "ky so nho nhat la: " << min << endl;
	}
}
```
#### Bai 3
```c
#include <iostream>
using namespace std;
int main() {
	while (true) {
		int n, daonguoc = 0;
		cout << "Nhap vao mot so nguyen duong (-1 de ket thuc): ";
		cin >> n;
		if (n == -1)break;
		while (n != 0) {
			daonguoc = daonguoc *10+ (n % 10); n /= 10;
		}
			cout << "gia tri dao nguoc la " << daonguoc << endl;
		
	}
}
```
#### Bai 4 
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	do {
		cout << "Nhap vao mot so nguyen duong (nhap <=0 de dung lai): ";
		cin >> n;
		for (int i = 0; i < n; i++)
			cout << "*" << " " << endl;
		if (n <= 0)break;

	} while (n > 0);
}
```
#### Bai 5
```c
#include <iostream>

using namespace std;

int primes[10000001];

void sievePrime() {
  //coi tat ca so deu la so nguyen to
  //primes [i] = 1; la so nt
  //primes [i] = 0; khong la so nt
  for (int i = 0; i <= 1000000; i++) {
    primes[i] = 1;
  }
  primes[0] = primes[1] = 0;
  for (int i = 2; i <= 1000; i++) {
    //neu i la so nt 
    if (primes[i]) {
      //duyet cac boi cua i va cho la 0
      for (int j = i*i; j <= 1000000; j+=i) {
        primes[j] = 0; // j khong con la so nt
      }
    }
  }
}

int main() {
  sievePrime();
  int n;
  cin >> n;

  if (primes[n]) cout << n << " la so nguyen to";
  else cout << n << " khong phai la so nguyen to";

  cout << "\nCac so nguyen to tu 1 - " << n << ": ";
  for (int i = 0; i <= n; i++) {
    if (primes[i]) cout << i << " ";
  }

  cout << endl << n << " so dau tien la: ";
  int count = 0;
  for (int i = 0; i <= 1000000; i++) {
    if (primes[i]) {
      cout << i << " ";
      count++;
    }
    if(count == n) break;
  }
  return 0;
}
```
#### Bai 6 
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	cout << "Hay nhap vao kich thuoc: ";
	cin >> n;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			cout << j * i << " \t";
		}

		cout << endl;
	}
		
}
```
#### Bai 7 
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	do {
		cout << "Nhap vao mot so nguyen duong (Nhap -1 de ket thuc): ";
		cin >> n;
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				cout << "*" << " ";
			}
			cout << endl;
		}
	} while (n != -1);
}
```
#### Bai 8
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	do {
		cout << "Nhap vao mot so nguyen ( nhap vao -1 de ket thuc): ";
		cin >> n;
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= i; j++) {
				cout << "*" << " ";
			}
			cout << endl;
		}
	} while (n != -1);
}
```
#### Bai 9
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	do {
		cout << "Nhap vao mot so nguyen (nhap -1 de ket thuc): ";
		cin >> n;
		for (int i = 1; i <= n; i++) {
			for (int j = n; j >= i; j--) {
				cout << "*" << " ";
			}
			cout << endl;
		}
	} while (n != -1);
}
```
#### Bai 10
```c
#include <iostream>

using namespace std;

int main() {
  while (true) {
    int n;
    cout << "Hay nhap so nguyen duong (-1 de ket thuc): ";
    cin >> n;
    if (n == -1) break;

    int soDaoNguoc = 0;
    for (int i = n; i > 0; i/=10) {
      soDaoNguoc = soDaoNguoc * 10 + (i % 10);
    }

    if (soDaoNguoc == n) cout << n << " la so doi xung\n";
    else cout << n << " khong la so doi xung\n";
  }
  return 0;
}
```
#### Bai 11
```c
#include <iostream>

using namespace std;

int main() {
  while (true) {
    int n;
    cout << "Hay nhap kich thuoc hinh vuong (-1 de ket thuc): ";
    cin >> n;
    if (n == -1) break;
    else if (n <= 2) {
      cout << "Kich thuoc hinh vuong phai > 2!\n";
      continue;
    }

    for (int i = 1; i <= n; i++) {
      if (i == 1 || i == n) {
        for(int j = 1; j <= n; j++) {
          cout << "*";
        }
      } else {
        cout << "*";
        for(int j = 1; j < n; j++) {
          if (j == n-1) cout << "*";
          else cout << " ";
        }
      }
      cout << endl;
    }
  }
  return 0;
}
```
#### Bai 12
```c
#include <iostream>

using namespace std;

int main() {
  while (true) {
    int n;
    cout << "Hay nhap chieu cao tam giac (-1 de ket thuc): ";
    cin >> n;
    if (n == -1) break;

    for (int i = 1; i <= n; i++) {
      for (int j = i-1; j > 0; j--) {
        cout << " ";
      }
      for (int h = n - (i - 1); h > 0; h--) {
        cout << "*";
      }
      cout << endl;
    }
  }
  return 0;
}
```
#### Bai 13
```c
#include <iostream>

using namespace std;

int main() {
  while (true) {
    int n;
    cout << "Hay nhap chieu cao tam giac (-1 de ket thuc): ";
    cin >> n;
    if (n == -1) break;

    for (int i = 1; i <= n; i++) {
      for (int j = n-i; j > 0; j--) {
        cout << " ";
      }
      for (int h = i; h > 0; h--) {
        cout << "*";
      }
      cout << endl;
    }
  }
  return 0;
}
```
#### Bai 14
```c
#include <iostream>

using namespace std;

int main() {
  while (true) {
    int n;
    cout << "Hay nhap chieu cao tam giac (-1 de ket thuc): ";
    cin >> n;
    if (n == -1) break;
    if (n <= 0 || n % 2 == 0) {
      cout << "Chieu cao phai la so le duong.\n";
      continue;
    }

    int count = (n + 1) / 2;

    for (int i = 1; i <= n; i += 2) {
      for (int k = 1; k <= count - (i + 1) / 2; k++) {
        cout << " ";
      }
      for (int j = 1; j <= i; j++) {
        cout << "*";
      }
      cout << endl;
    }

    for (int i = 1; i <= 3; i++) {
      for (int k = 1; k <= (n - 3) / 2; k++) {
        cout << " ";
      }
      cout << "***" << endl;
    }

    for (int i = 1; i <= n; i++) {
      cout << "*";
    }
    cout << endl;
  }
  return 0;
}
```

# Buoi 2
#### Bai 1
```c
#include <iostream>
#include <conio.h>
using namespace std;
int main() {
	int n;
	cout << "Nhap vao mot so nguyen tu 2 tro len (Nhan phim Esc de dung):";
	cin >> n;
	while (n < 2) {
		cout << "Nhap sai nhap lai: ";
		cin >> n;
	}
	do {
	char c;
		for (int i = 2; i < n; i++) {
			if (n % i == 0)cout << n << " khong phai so nguyen to.";
			else cout << n << " la so nguyen to";
		}
		c = _getch();
		if (c == 27) break;
	} while (true); 
}
```
#### Bai 2 
```c
#include <iostream>
using namespace std;
int main() {
	int tu, mau;
		cout << "Chuong trinh nhap vao phan so (nhap mau so bang 0 de ket thuc)!!!" << endl;
		do{cout << "Hay nhap vao tu so: "; cin >> tu;
		cout << "Hay nhap vao mau so: "; cin >> mau;

		int tulate, maulate;
		
			maulate = mau / tu;
			if (mau == 0)tulate = tu;
			else tulate = tu / tu;
			cout << "Vay phan so rut gon cua " << tu << "/" << mau << " la: " << tulate << "/" << maulate<<endl;
		} while (mau != 0);
		
}
```
#### Bai 3 
```c
#include <iostream>
using namespace std;
int main() {
    while (true) {
        int n, sum = 0;
        cin >> n;
        if (n <= 0) break;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }

        cout << sum << endl;
    }
}
```
#### Bai 4
```c
#include <iostream>
#include<conio.h>
using namespace std;
int main() {
	int n;
	cout << "Nhap vao mot so duong (<1000): ";
	cin >> n;
	while (n < 0) {
		cout << "Nhap sai, nhap lai:";
		cin >> n;
	}
	int donVi = n % 10; n = n / 10;
	int chuc = n % 10; n = n / 10;
	int tram = n % 10; n = n / 10;

	do {
		char c;
		
		switch (tram) {
		case 1: cout << "mot tram "; break;
		case 2: cout << "hai tram "; break;
		case 3: cout << "ba tram "; break;
		case 4: cout << "bon tram "; break;
		case 5: cout << "nam tram "; break;
		case 6: cout << "sau tram "; break;
		case 7: cout << "bay tram "; break;
		case 8: cout << "tam tram "; break;
		case 9: cout << "chin tram "; break;
		}

		switch (chuc) {
		case 1: cout << "muoi "; break;
		case 2: cout << "hai muoi "; break;
		case 3: cout << "ba muoi "; break;
		case 4: cout << "bon muoi "; break;
		case 5: cout << "nam muoi "; break;
		case 6: cout << "sau muoi "; break;
		case 7: cout << "bay muoi "; break;
		case 8: cout << "tam muoi "; break;
		case 9: cout << "chin muoi "; break;
		case 0: if (donVi > 0 && tram > 0) cout << "le "; break;
		}

		switch (donVi) {
		case 1: cout << "một "; break;
		case 2: cout << "hai "; break;
		case 3: cout << "ba "; break;
		case 4: cout << "bon "; break;
		case 5: cout << "nam "; break;
		case 6: cout << "sau "; break;
		case 7: cout << "bay "; break;
		case 8: cout << "tam "; break;
		case 9: cout << "chin "; break;
		}

		c = _getch();
		if (c == 27)break;
	} while (true);
}
```
#### Bai 5
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	while (true) {
		cout << "Nhap vao mot so (nhap 0 de dung): ";
		cin >> n;
		if (n < 0)break;

		for (int i = 1; i < n; i+=2) {
			if (n % i != 0)cout << i << " "<<endl;
		}
	}
}
```
#### Bai 6 
```c
#include <iostream>
using namespace std;
int main() {
	int n;
	do{
		cout << "Nhap vao mot so tu 2 tro len: ";
		cin >> n;
		int sum = 0;
		for (int i = 1; i <= n; i++) {
			if (i != n)cout << i << "+";
			else cout << i << " = ";
			sum+=i;
		}
		cout << sum << endl;

	} while (n >= 2);
}
```
#### Bai 7
#include <iostream>

using namespace std;

int prime[10000001];

void sievePrime() {
  for (int i = 0; i <= 1000000; i++) prime[i] = 1;

  prime[0] = prime[1] = 0;

  for (int i = 2; i <= 1000; i++) {
    if (prime[i]) {
      for (int j = i * i; j <= 1000000; j += i) prime[j] = 0;
    }
  }
}

int main() {
  sievePrime();
  int n = 1000;
  for (int i = 0; i <= n; i++) {
    if (prime[i]) {
      int sau = i + 2;
      if (prime[sau]) {
        cout << i << " - " << sau << endl;
        i++;
      }
    }
  }

  return 0;
}
```
#### Bai 8
```c
#include <iostream>

using namespace std;

int main() {
  int n = 9;
  
  int count = (n + 1) / 2;
  for (int i = 1; i <= n; i += 2) {
    count--;
    for (int k = count; k >= 0; k--) cout << " ";
    for (int j = 1; j <= i; j++) cout << "*";
    cout << endl;
  }

  for (int i = n - 2; i >= 1; i -= 2) {
    count++;
    for (int k = 0; k <= count; k++) cout << " ";
    for (int j = i; j >= 1; j--) cout << "*";
    cout << endl;
  }

  return 0;
}
```
#### Bai 9
```c
#include <iostream>

using namespace std;

int main() {
  int n;
  cout << "Nhap mot so le tu 1 --> 19: ";
  try_again:
  cin >> n;

  if (n < 1 || n > 19 || n % 2 == 0) {
    cout << "Vui long nhap so le tu 1 --> 19: ";
    goto try_again;
  }
  
  int count = (n + 1) / 2;
  for (int i = 1; i <= n; i += 2) {
    count--;
    for (int k = count; k >= 0; k--) cout << " ";
    for (int j = 1; j <= i; j++) cout << "*";
    cout << endl;
  }

  for (int i = n - 2; i >= 1; i -= 2) {
    count++;
    for (int k = 0; k <= count; k++) cout << " ";
    for (int j = i; j >= 1; j--) cout << "*";
    cout << endl;
  }

  return 0;
}
```


