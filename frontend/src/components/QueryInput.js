return (
  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h5 className="card-title mb-3">🧾 SQL Queries</h5>

      <div className="row g-3">
        <div className="col-md-6">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Query 1 (Source Table)"
            onChange={(e) => setQueries((q) => ({ ...q, q1: e.target.value }))}
          />
        </div>
        <div className="col-md-6">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Query 2 (Target Table)"
            onChange={(e) => setQueries((q) => ({ ...q, q2: e.target.value }))}
          />
        </div>
      </div>
    </div>
  </div>
);
