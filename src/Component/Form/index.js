import React from "react";

// Asset
import "./style.css";
import SaveIcon from "@material-ui/icons/Save";

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
        <form>
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

          <button type="submit" className="btn btn-proses">
            <SaveIcon />
            <span>Simpan</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
