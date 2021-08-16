import React from "react";

// Asset
import "./style.css";

import {
  Authtorized,
  AuthorizedFinance,
  AuthorizedTechnical,
  BillingAddress,
  CompanyInformation,
  DocumentReq,
  InstallationAddress,
  ServiceOrder,
  Signs,
  TypeofOrder,
} from "./parts";

function Form() {
  return (
    <div className="client-form-wrapper">
      <div className="client-form">
        {/* Jenis Permintaan */}
        <TypeofOrder />

        {/* Informasi Perusahaan Pelanggan */}
        <CompanyInformation />

        {/* Penanggun Jawab Perusahaan */}
        <Authtorized />

        {/* Penanggung Jawab Keuangan */}
        <AuthorizedFinance />

        {/* Alamat Penagihan */}
        <BillingAddress />

        {/* Penanggung Jawab Teknis */}
        <AuthorizedTechnical />

        {/* Layanan Yang Diminta */}
        <ServiceOrder />

        {/* Alamat Installasi */}
        <InstallationAddress />

        {/* Tanda Tangan */}
        <Signs />

        {/* Kelengkapan DOkumen */}
        <DocumentReq />
      </div>
    </div>
  );
}

export default Form;
