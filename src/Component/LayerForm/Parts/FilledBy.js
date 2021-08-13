import React, { useState } from "react";

function FilledBy({ getFilledBy }) {
  const [namaFile, setNamaFile] = useState("");
  const [data, setData] = useState({});


  

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setNamaFile(file.name);
  };

  return (
    <>
      <h3>Diisi Oleh Buana Lintas Media</h3>
      <input type="text" id="price" placeholder="Nama Marketing" />
      <input type="date" className="date" placeholder="Tanggal" />
      <label class="custom-file-upload">
        <input type="file" onChange={fileHandler} />
        {namaFile === "" ? "Tanda Tangan" : <span>{namaFile}</span>}
      </label>
    </>
  );
}

export default FilledBy;
