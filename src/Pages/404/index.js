import React from "react";

// Asset
import NotFound from "../../Assets/not-found.svg";
import "./style.css";

function FourZeroFour() {
  return (
    <div className="not-found" data-aos="zoom-in" data-aos-duration="800">
      <img src={NotFound} alt="" />
      <h1>Halaman Tidak Ditemukan</h1>
      <p>
        Halaman tidak ditemukan. Silahkan hubungi marketing untuk mendapatkan
        Link Form yang valid
      </p>
    </div>
  );
}

export default FourZeroFour;
