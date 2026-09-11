
<!doctype html>
<html lang="vi">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet" />
    <title>@yield('title', 'Online Store')</title>
</head>
<body class="bg-light">
    <!-- Header / Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary py-3 shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{{ route('home.index') }}">Online Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav me-auto">
                    <a class="nav-link active" href="{{ route('home.index') }}">Home</a>
                    <a class="nav-link active" href="{{ route('home.about') }}">About</a>
                    <a class="nav-link active" href="{{ route('products.index') }}">Products</a>
                </div>
                <div class="navbar-nav ms-auto align-items-center">
                    {{-- Logic hiển thị Navigation Bar theo yêu cầu 3 Lab 10  --}}
                    @auth
                        {{-- Nếu ĐÃ ĐĂNG NHẬP --}}
                        <a class="nav-link text-warning fw-bold me-2" href="{{ route('products.create') }}">+ Thêm Sản Phẩm</a>
                        <a class="nav-link text-white me-3" href="{{ route('products.trash') }}">Thùng Rác</a>
                        <span class="navbar-text text-white me-3">
                            Chào, <strong class="text-warning">{{ auth()->user()->name }}</strong>
                            @if(auth()->user()->phone_number)
                                <small class="text-light">({{ auth()->user()->phone_number }})</small>
                            @endif
                        </span>
                        <form method="POST" action="{{ route('logout') }}" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-outline-light">Đăng Xuất</button>
                        </form>
                    @else
                        {{-- Nếu CHƯA ĐĂNG NHẬP (Khách vãng lai) --}}
                        <a href="{{ route('login') }}" class="btn btn-light btn-sm me-2 fw-bold">Đăng Nhập</a>
                        <a href="{{ route('register') }}" class="btn btn-warning btn-sm fw-bold">Đăng Ký</a>
                    @endauth
                </div>
            </div>
        </div>
    </nav>

    <header class="masthead bg-primary text-white text-center py-4 shadow-sm mb-4">
        <div class="container d-flex align-items-center flex-column">
            <h2>@yield('subtitle', 'A Laravel Online Store')</h2>
        </div>
    </header>

    <!-- Khung hiển thị thông báo Session Success -->
    <div class="container">
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                <strong>Thành công!</strong> {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif
    </div>

    <!-- Main Content -->
    <div class="container my-4">
        @yield('content')
    </div>

    <!-- Footer -->
    <div class="copyright py-4 text-center text-white bg-secondary">
        <div class="container">
            <small>
                Copyright - Online Store Laravel (Lab 10 Authentication)
            </small>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
