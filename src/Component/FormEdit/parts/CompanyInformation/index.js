import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

function CompanyInformation({ getCompanyInformation, id }) {
  const [data, setData] = useState({
    namaPerusahaan: "",
    groupPerusahaan: "",
    jenisUsaha: "",
    alamat: "",
    kota: "",
    kodePos: "",
    provinsi: "",
    alamatSitus: "",
    alamatEmail: "",
    npwp: "",
    telephone: "",
    fax: "",
  });

  useEffect(() => {
    database
      .ref(`data-v2/${id}`)
      .get()
      .then((snap) => {
        let theData = snap.val();
        setData(theData.companyInformation);
      });
  }, []);

  useEffect(() => {
    getCompanyInformation(data);
  }, [data]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getCompanyInformation(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Informasi Perusahaan Pelanggan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama Perusahaan</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.namaPerusahaan}
            name="namaPerusahaan"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Group Perusahaan</label>
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.groupPerusahaan}
            name="groupPerusahaan"
          />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Jenis usaha</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.jenisUsaha}
            name="jenisUsaha"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat</label>
          <textarea
            onChange={changeHandler}
            className="form-control"
            value={data.alamat}
            name="alamat"
          ></textarea>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label className="form-label">Kota</label>
              <input
                required
                onChange={changeHandler}
                type="text"
                className="form-control"
                value={data.kota}
                name="kota"
              />
            </div>
            <div className="col">
              <label className="form-label">Kode Pos</label>
              <input
                required
                onChange={changeHandler}
                type="text"
                className="form-control"
                value={data.kodePos}
                name="kodePos"
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Provinsi</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.provinsi}
            name="provinsi"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Situs</label>
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.alamatSitus}
            name="alamatSitus"
          />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Email</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.alamatEmail}
            name="alamatEmail"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">NPWP</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={data.npwp}
            name="npwp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telephone</label>
          <input
            required
            onChange={changeHandler}
            type="text"
            className="form-control"
            placeholder="Kode Area / Nomor"
            value={data.telephone}
            name="telephone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fax</label>
          <input
            onChange={changeHandler}
            type="text"
            className="form-control"
            placeholder="Kode Area / Nomor"
            value={data.fax}
            name="fax"
          />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
      </div>
    </div>
  );
}

export default CompanyInformation;
