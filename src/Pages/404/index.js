import React from "react";

// Asset
import NotFound from "../../Assets/not-found.svg";
import "./style.css";

function FourZeroFour() {
  return (
    <div className="not-found">
      <img src={NotFound} alt="" />
      <h2>Halaman Tidak Ditemukan</h2>
      <p>
        Halaman tidak ditemukan. Silahkan hubungi marketing untuk mendapatkan
        Link Form yang valid
      </p>
    </div>
  );
}

export default FourZeroFour;
