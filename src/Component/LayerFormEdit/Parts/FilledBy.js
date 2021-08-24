import React, { useState, useEffect } from "react";
import { useAuth } from "../../../Helpers/Context/AuthContext";
import { useAnimate } from "../../../Helpers/Context/Animate";
import { database } from "../../../firebase";

function FilledBy({ id, getFilledBy }) {
  const { currentUser } = useAuth();
  const { animate } = useAnimate();
  const [namaFile, setNamaFile] = useState("");
  const [nama, setNama] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setNamaFile("");
  }, [animate]);

  useEffect(() => {
    setNama(currentUser.displayName);
  }, []);

  useEffect(() => {
    if (id === "") {
      console.log("kosong");
    } else {
      database
        .ref(`data-v2/${id}`)
        .get()
        .then((snap) => {
          let theData = snap.val();
          setData(theData.filledBy);
        });
    }
  }, [id]);

  useEffect(() => {
    getFilledBy(data);
  }, [data]);

  const handleChange = (e) => {
    const { value } = e.target;
    const newData = {
      ...data,
      nama,
      tanggal: value,
    };

    setData(newData);
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setNamaFile(file.name);

    let date = Date.now();
    const imgName = `${date}-${file.name}`;
    const newData = {
      ...data,
      imgName,
      [e.target.name]: file,
    };

    getFilledBy(newData);
  };

  return (
    <>
      <h3>Diisi Oleh Buana Lintas Media</h3>
      <input
        type="text"
        id="nama"
        placeholder="Nama Marketing"
        value={nama}
        disabled
      />
      <input
        type="date"
        className="date"
        placeholder="Tanggal"
        onChange={handleChange}
        value={data.tanggal}
        required
      />
      <label className="custom-file-upload">
        <input
          type="file"
          className="custom-file"
          onChange={fileHandler}
          name="ttd"
        />
        {namaFile === "" ? "Tanda Tangan" : <span>{namaFile}</span>}
      </label>
    </>
  );
}

export default FilledBy;
