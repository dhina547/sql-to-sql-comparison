return (
  <div className="container py-4">
    <div className="text-center mb-4">
      <h2 className="fw-bold">SQL to SQL Comparison Tool</h2>
      <p className="text-muted">
        Compare results of two SQL queries across tables/databases
      </p>
    </div>

    <DBConnect />
    <QueryInput setQueries={setQueries} />
    <KeyMapping setMapping={setMapping} />

    <div className="text-center">
      <button className="btn btn-primary px-5" onClick={compare}>
        ▶ Run Comparison
      </button>
    </div>

    {result && <ResultTable result={result} />}
  </div>
);
