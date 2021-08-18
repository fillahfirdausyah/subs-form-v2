import React, { useState } from "react";

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

function Authorized({ getAuthorized }) {
  const [isTanggal, setIsTanggal] = useState(false);
  const [data, setData] = useState({
    nama: "",
    ttlTempat: "",
    ttlTggl: "",
    jabatan: "",
    telephone: "",
    idCard: "",
    noIdCard: "",
    masaBerlaku: "",
    alamatEmail: "",
  });

  const authorizedDataHandler = (e) => {
    const { value, name } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getAuthorized(newData);
  };

  const selectHandler = (e) => {
    const { name, value } = e.target;
    if (value === "tanggal") {
      setIsTanggal(true);
    } else {
      setIsTanggal(false);
      const newData = {
        ...data,
        [name]: value,
      };
      setData(newData);
      getAuthorized(newData);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Penanggung Jawab Perusahaan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            onChange={authorizedDataHandler}
            type="text"
            className="form-control"
            value={data.nama}
            name="nama"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tempat Tanggal Lahir</label>
          <div className="row">
            <div className="col">
              <input
                onChange={authorizedDataHandler}
                type="text"
                className="form-control"
                placeholder="Tempat"
                value={data.ttlTempat}
                name="ttlTempat"
              />
            </div>
            <div className="col">
              <input
                onChange={authorizedDataHandler}
                type="date"
                className="form-control"
                value={data.ttlTggl}
                name="ttlTggl"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Jabatan</label>
          <input
            onChange={authorizedDataHandler}
            type="text"
            className="form-control"
            value={data.jabatan}
            name="jabatan"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telephone</label>
          <input
            onChange={authorizedDataHandler}
            type="text"
            className="form-control"
            placeholder="Kode Area / Nomor"
            value={data.telephone}
            name="telephone"
          />
        </div>
        <div className="mb-3 radio-flex">
          <label className="form-label">Kartu Indentitas</label>
          <div className="radio-flex">
            {radioData.map((x, index) => (
              <Radio
                label={x.label}
                key={index}
                id={x.label}
                name={x.name}
                value={x.label}
                onChange={authorizedDataHandler}
              />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">No. Kartu Identitas</label>
          <input
            onChange={authorizedDataHandler}
            type="text"
            className="form-control"
            value={data.noIdCard}
            name="noIdCard"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Masa Berlaku</label>
          <div className="row">
            <div className="col">
              <select
                className="form-select"
                name="masaBerlaku"
                onChange={selectHandler}
              >
                <option value="">Pilih</option>
                <option value="Seumur Hidup">Seumur Hidup</option>
                <option value="tanggal">Tanggal</option>
              </select>
            </div>
            <div className="col">
              {isTanggal ? (
                <input
                  onChange={authorizedDataHandler}
                  type="date"
                  className="form-control"
                  value={data.masaBerlaku}
                  name="masaBerlaku"
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Email</label>
          <input
            onChange={authorizedDataHandler}
            type="text"
            className="form-control"
            value={data.alamatEmail}
            name="alamatEmail"
          />
        </div>
      </div>
    </div>
  );
}

export default Authorized;
