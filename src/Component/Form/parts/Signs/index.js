import React from "react";

function Signs() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Tanda Tangan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama Perusahaan</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Tanda Tangan Nama Perusahaan</label>
          <input type="file" className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default Signs;
