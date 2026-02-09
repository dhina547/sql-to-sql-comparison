return (
  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h5 className="card-title mb-3">🔌 Database Connection</h5>

      <div className="row g-2">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Host"
            onChange={(e) => setDb({ ...db, host: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Database"
            onChange={(e) => setDb({ ...db, database: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Username"
            onChange={(e) => setDb({ ...db, username: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setDb({ ...db, password: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-success" onClick={connect}>
          Connect
        </button>
      </div>
    </div>
  </div>
);
