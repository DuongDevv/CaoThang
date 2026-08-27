import { useState } from 'react';

export default function Exercise2_ControlledForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: 'male',
    city: 'hcm',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Bài tập 2: Controlled Form</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Họ tên:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ tên..."
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Mật khẩu:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold d-block">Giới tính:</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                id="ex2-male"
                value="male"
                className="form-check-input"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="ex2-male">Nam</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                id="ex2-female"
                value="female"
                className="form-check-input"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="ex2-female">Nữ</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Thành phố:</label>
            <select
              name="city"
              className="form-select"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="hanoi">Hà Nội</option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="danang">Đà Nẵng</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success px-4">
            Đăng ký
          </button>
        </form>

        {submittedData && (
          <div className="mt-4 p-3 bg-light rounded border">
            <h6 className="fw-bold text-success">Thông tin đã nhập:</h6>
            <p className="mb-1"><strong>Họ tên:</strong> {submittedData.name}</p>
            <p className="mb-1"><strong>Email:</strong> {submittedData.email}</p>
            <p className="mb-1"><strong>Giới tính:</strong> {submittedData.gender === 'male' ? 'Nam' : 'Nữ'}</p>
            <p className="mb-0"><strong>Thành phố:</strong> {submittedData.city.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
