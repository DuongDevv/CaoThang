import { useState } from 'react';

export default function Exercise1_Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  const handleReset = () => setCount(0);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Bài tập 1: Counter App</h5>
      </div>
      <div className="card-body text-center">
        <h3 className="mb-3">
          Count: <span className="badge bg-dark fs-3">{count}</span>
        </h3>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-danger px-4"
            onClick={handleDecrease}
            disabled={count === 0}
          >
            -
          </button>
          <button className="btn btn-warning px-4" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-success px-4" onClick={handleIncrease}>
            +
          </button>
        </div>
        {count === 0 && (
          <small className="text-muted d-block mt-2">
            (Count không được nhỏ hơn 0)
          </small>
        )}
      </div>
    </div>
  );
}
