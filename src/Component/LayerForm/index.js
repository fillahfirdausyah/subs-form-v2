import React, { useState } from "react";

// Asset
import "./style.css";

// Context
import { useAnimate } from "../../Context/Animate";

// Component
import Backdrop from "../Backdrop/";

function LayerForm() {
  const [namaFile, setNamaFile] = useState("");
  const { addAnimate, animate, addBackdrop } = useAnimate();

  const fileHandler = (e) => {
    const file = e.target.files[0];
    setNamaFile(file.name);
  };

  const closeForm = () => {
    addAnimate("down");
    addBackdrop("not-show");
  };

  return (
    <Backdrop>
      <div className={`layer-form ${animate}`}>
        <hr onClick={closeForm} />
        <form action="">
          <h3>Biaya Berlangganan</h3>
          <input type="text" id="price" placeholder="Biaya Setup" />
          <input type="text" id="price" placeholder="Biaya Layanan" />
          <h3>Diisi Oleh Buana Lintas Media</h3>
          <input type="text" id="price" placeholder="Nama Marketing" />
          <input type="date" className="date" placeholder="Tanggal" />
          <label class="custom-file-upload">
            <input type="file" onChange={fileHandler} />
            {namaFile === "" ? "Tanda Tangan" : <span>{namaFile}</span>}
          </label>
          <button className="btn btn-simpan">Simpan</button>
        </form>
      </div>
    </Backdrop>
  );
}

export default LayerForm;
