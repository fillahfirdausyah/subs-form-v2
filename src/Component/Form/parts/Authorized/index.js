import React from "react";

import Radio from "../../../Radio";

const radioData = [
  {
    name: "idCard",
    label: "KTP",
  },
  {
    name: "idCard",
    label: "KIM-S",
  },
  {
    name: "idCard",
    label: "SIM",
  },
  {
    name: "idCard",
    label: "PASPOR",
  },
];

function Authorized() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Penanggung Jawab Perusahaan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Tempat Tanggal Lahir</label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Tempat"
              />
            </div>
            <div className="col">
              <input type="date" className="form-control" />
            </div>
          </div>
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
        <div className="mb-3 radio-flex">
          <label className="form-label">Kartu Indentitas</label>
          <div className="radio-flex">
            {radioData.map((x, index) => (
              <Radio label={x.label} key={index} id={x.label} name={x.name} />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">No. Kartu Identitas</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Masa Berlaku</label>
          <div className="row">
            <div className="col">
              <select className="form-select" name="" id="">
                <option value="">Pilih</option>
                <option value="">Seumur Hidup</option>
                <option value="">Tanggal</option>
              </select>
            </div>
            <div className="col">
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Email</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
  );
}

export default Authorized;
