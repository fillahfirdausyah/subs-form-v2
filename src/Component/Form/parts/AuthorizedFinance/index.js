import React from "react";

function AuthorizedFinance() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Penanggung Jawab Keuangan</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Bagian</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Jabatan</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Telephone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Kode Area / Nomor"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fax</label>
            <input
              type="text"
              className="form-control"
              placeholder="Kode Area / Nomor"
            />
            <div className="form-text">{"*)"} Opsional</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Alamat Email</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthorizedFinance;
