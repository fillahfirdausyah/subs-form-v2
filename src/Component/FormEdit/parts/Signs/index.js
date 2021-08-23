import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

function Signs({ getSigns, id }) {
  const [data, setData] = useState({
    namaPerusahaan: "",
    ttd: "",
  });

  useEffect(() => {
    database
      .ref(`data-v2/${id}`)
      .get()
      .then((snap) => {
        let theData = snap.val();
        setData(theData.signs);
      });
  }, []);

  const signsDataHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getSigns(newData);
  };

  const signsFileHanlder = (e) => {
    let date = Date.now();
    const fileName = `${date}-${e.target.files[0].name}`;
    const newData = {
      ...data,
      fileName,
      [e.target.name]: e.target.files[0],
    };
    setData(newData);
    getSigns(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Tanda Tangan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Nama Perusahaan</label>
          <input
            required
            onChange={signsDataHandler}
            type="text"
            className="form-control"
            name="namaPerusahaan"
            value={data.namaPerusahaan}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Tanda Tangan {data.namaPerusahaan}
          </label>
          <input
            required
            onChange={signsFileHanlder}
            type="file"
            className="form-control"
            name="ttd"
          />
        </div>
      </div>
    </div>
  );
}

export default Signs;
