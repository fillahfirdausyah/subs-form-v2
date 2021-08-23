import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

function AuthorizedFinance({ getAuthorizedFinance, id }) {
  const [data, setData] = useState({
    nama: "",
    bagian: "",
    jabatan: "",
    telephone: "",
    fax: "",
    alamatEmail: "",
  });

  useEffect(() => {
    database
      .ref(`data-v2/${id}`)
      .get()
      .then((snap) => {
        let theData = snap.val();
        setData(theData.authorizedFinance);
      });
  }, []);

  useEffect(() => {
    getAuthorizedFinance(data);
  }, [data]);

  const authorizedFinanceDataHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getAuthorizedFinance(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Penanggung Jawab Keuangan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            required
            onChange={authorizedFinanceDataHandler}
            type="text"
            className="form-control"
            value={data.nama}
            name="nama"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bagian</label>
          <input
            required
            onChange={authorizedFinanceDataHandler}
            type="text"
            className="form-control"
            value={data.bagian}
            name="bagian"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Jabatan</label>
          <input
            required
            onChange={authorizedFinanceDataHandler}
            type="text"
            className="form-control"
            value={data.jabatan}
            name="jabatan"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Telephone</label>
          <input
            required
            onChange={authorizedFinanceDataHandler}
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
            onChange={authorizedFinanceDataHandler}
            type="text"
            className="form-control"
            placeholder="Kode Area / Nomor"
            value={data.fax}
            name="fax"
          />
          <div className="form-text">{"*)"} Opsional</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Alamat Email</label>
          <input
            required
            onChange={authorizedFinanceDataHandler}
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

export default AuthorizedFinance;
