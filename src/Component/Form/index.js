import React, { useState, useEffect } from "react";
import { database } from "../../firebase";

// Asset
import "./style.css";
import SaveIcon from "@material-ui/icons/Save";
import { FilledFormPage } from "../../Pages";

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

function Form({ postData, id, token }) {
  const [haveToken, setHaveToken] = useState(null);

  useEffect(() => {
    let check = localStorage.getItem(id);
    if (check == token) {
      setHaveToken(true);
    } else {
      setHaveToken(false);
    }
  }, []);

  const [typeofOrder, setTypeofOrder] = useState({});
  const [companyInformation, setCompanyInformation] = useState({});
  const [authorized, setAuthorized] = useState({});
  const [authorizedFinance, setAuthorizedFinance] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [authorizedTechnical, setAuthorizedTechnical] = useState({});
  const [serviceOrder, setServiceOrder] = useState({});
  const [installationAddress, setInstallationAddress] = useState({});
  const [signs, setSigns] = useState({});
  const [documentReq, setDocumentReq] = useState({});

  const getTypeofOrder = (data) => {
    setTypeofOrder(data);
  };
  const getCompanyInformation = (data) => {
    setCompanyInformation(data);
  };
  const getAuthorized = (data) => {
    setAuthorized(data);
  };
  const getAuthorizedFinance = (data) => {
    setAuthorizedFinance(data);
  };
  const getBillingAddress = (data) => {
    setBillingAddress(data);
  };
  const getAuthorizedTechnical = (data) => {
    setAuthorizedTechnical(data);
  };
  const getServiceOrder = (data) => {
    setServiceOrder(data);
  };
  const getInstallationAddress = (data) => {
    setInstallationAddress(data);
  };
  const getSigns = (data) => {
    setSigns(data);
  };
  const getDocumentReq = (data) => {
    setDocumentReq(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem(id, token);

    const newData = {
      typeofOrder,
      companyInformation,
      authorized,
      authorizedFinance,
      billingAddress,
      authorizedTechnical,
      serviceOrder,
      installationAddress,
      signs,
      documentReq,
      status: "filled",
    };

    postData(newData);
  };

  return (
    <>
      {haveToken ? (
        <FilledFormPage />
      ) : (
        <div className="client-form-wrapper">
          <div className="client-form">
            <form onSubmit={submitHandler}>
              {/* Jenis Permintaan */}
              <TypeofOrder getTypeofOrder={getTypeofOrder} />

              {/* Informasi Perusahaan Pelanggan */}
              <CompanyInformation
                getCompanyInformation={getCompanyInformation}
              />

              {/* Penanggun Jawab Perusahaan */}
              <Authtorized getAuthorized={getAuthorized} />

              {/* Penanggung Jawab Keuangan */}
              <AuthorizedFinance getAuthorizedFinance={getAuthorizedFinance} />

              {/* Alamat Penagihan */}
              <BillingAddress getBillingAddress={getBillingAddress} />

              {/* Penanggung Jawab Teknis */}
              <AuthorizedTechnical
                getAuthorizedTechnical={getAuthorizedTechnical}
              />

              {/* Layanan Yang Diminta */}
              <ServiceOrder getServiceOrder={getServiceOrder} />

              {/* Alamat Installasi */}
              <InstallationAddress
                getInstallationAddress={getInstallationAddress}
              />

              {/* Tanda Tangan */}
              <Signs getSigns={getSigns} />

              {/* Kelengkapan DOkumen */}
              <DocumentReq getDocumentReq={getDocumentReq} />

              <button type="submit" className="btn btn-proses">
                <SaveIcon />
                <span>Simpan</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
