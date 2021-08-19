import React from "react";

// Asset
import "./style.css";
import Filled from "../../Assets/filled.svg";

function FilledFormPage() {
  return (
    <div className="filled">
      <img src={Filled} alt="" />
      <h1>Form sudah terisi</h1>
      <p>
        Jika ingin mengedit silahkan hubungi marketing untuk mendapatkan Link
        untuk mengedit form
      </p>
    </div>
  );
}

export default FilledFormPage;
