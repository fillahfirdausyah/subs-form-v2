import React, { useState } from "react";

// Asset
import "./style.css";

// Context
import { useAnimate } from "../../Context/Animate";

function LayerForm() {
  const [namaFile, setNamaFile] = useState("");
  const { addAnimate, animate } = useAnimate();

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setNamaFile(file.name);
  };

  const closeForm = () => {
    addAnimate("down");
  };

  return (
    <div className={`layer-form ${animate}`}>
      <hr onClick={closeForm} />
      <form action="">
        <h3>Biaya Berlangganan</h3>
        <input type="text" id="price" placeholder="Biaya Setup" />
        <input type="text" id="price" placeholder="Biaya Layanan" />
        <h3>Diisi Oleh Buana Lintas</h3>
        <input type="text" id="price" placeholder="Nama Marketing" />
        <input type="date" className="date" placeholder="Tanggal" />
        <label class="custom-file-upload">
          <input type="file" onChange={fileHandler} />
          {namaFile === "" ? "Tanda Tangan" : <span>{namaFile}</span>}
        </label>
        <button className="btn btn-simpan">Simpan</button>
      </form>
    </div>
  );
}

export default LayerForm;
