return (
  <div className="card shadow-sm mt-4">
    <div className="card-body">
      <h5 className="card-title">📊 Comparison Summary</h5>

      <table className="table table-bordered mt-3">
        <tbody>
          <tr>
            <th>Matched Rows</th>
            <td className="text-success fw-bold">{result.summary.matched}</td>
          </tr>
          <tr>
            <th>Mismatched Rows</th>
            <td className="text-danger fw-bold">{result.summary.mismatched}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
