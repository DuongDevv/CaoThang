import { useRef, useState } from 'react';

export default function Exercise4_UncontrolledForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [output, setOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log('Uncontrolled Form Data:', data);
    setOutput(data);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-secondary text-white">
        <h5 className="mb-0">Bài tập 4: Uncontrolled Form (sử dụng useRef)</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Họ tên:</label>
            <input type="text" ref={nameRef} className="form-control" placeholder="Nhập họ tên..." />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <input type="email" ref={emailRef} className="form-control" placeholder="Nhập email..." />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Số điện thoại:</label>
            <input type="text" ref={phoneRef} className="form-control" placeholder="Nhập SĐT..." />
          </div>

          <button type="submit" className="btn btn-secondary px-4">
            Submit (Log Console)
          </button>
        </form>

        {output && (
          <div className="mt-3 p-3 bg-dark text-light rounded">
            <h6>Dữ liệu đọc trực tiếp từ useRef (DOM):</h6>
            <pre className="mb-0">{JSON.stringify(output, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
