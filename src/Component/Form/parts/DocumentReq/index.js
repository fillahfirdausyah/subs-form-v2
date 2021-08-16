import React from "react";

function DocumentReq() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Jenis Permintaan</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Nama Perusahaan</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama Perusahaan</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default DocumentReq;
