import React from "react";

// Asset
import "./style.css";
import Done from "../../Assets/done.svg";

function SuccessPage() {
  return (
    <div className="success-page" data-aos="zoom-in" data-aos-duration="800">
      <img src={Done} alt="" />
      <h1>Berhasil</h1>
      <p>Form berhasil di sumbmit</p>
    </div>
  );
}

export default SuccessPage;
