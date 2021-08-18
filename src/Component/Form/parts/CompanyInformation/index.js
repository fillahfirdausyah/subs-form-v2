import React from "react";

function CompanyInformation() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Informasi Perusahaan Pelanggan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama Perusahaan</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Group Perusahaan</label>
          <input type="text" className="form-control" />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Jenis usaha</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <textarea className="form-control"></textarea>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label className="form-label">Kota</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col">
              <label className="form-label">Kode Pos</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Provinsi</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Situs</label>
          <input type="text" className="form-control" />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">NPWP</label>
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
      </div>
    </div>
  );
}

export default CompanyInformation;
