import React, { useState, useEffect } from "react";

import SaveIcon from "@material-ui/icons/Save";
import Spinner from "../Spinner";

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
} from "./parts/";

function FormEdit({ token, id, postEditHandler, isLoading }) {
  const [haveToken, setHaveToken] = useState(null);

  useEffect(() => {
    let checkToken = localStorage.getItem(id);
    if (checkToken === token) {
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

  const postEdit = (e) => {
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

    postEditHandler(newData);
  };

  return (
    <div className="client-form-wrapper">
      <div className="client-form">
        <h1>Edit</h1>
        <form onSubmit={postEdit}>
          {/* Jenis Permintaan */}
          <TypeofOrder id={id} getTypeofOrder={getTypeofOrder} />

          {/* Informasi Perusahaan Pelanggan */}
          <CompanyInformation
            id={id}
            getCompanyInformation={getCompanyInformation}
          />

          {/* Penanggun Jawab Perusahaan */}
          <Authtorized id={id} getAuthorized={getAuthorized} />

          {/* Penanggung Jawab Keuangan */}
          <AuthorizedFinance
            id={id}
            getAuthorizedFinance={getAuthorizedFinance}
          />

          {/* Alamat Penagihan */}
          <BillingAddress id={id} getBillingAddress={getBillingAddress} />

          {/* Penanggung Jawab Teknis */}
          <AuthorizedTechnical
            id={id}
            getAuthorizedTechnical={getAuthorizedTechnical}
          />

          {/* Layanan Yang Diminta */}
          <ServiceOrder id={id} getServiceOrder={getServiceOrder} />

          {/* Alamat Installasi */}
          <InstallationAddress
            id={id}
            getInstallationAddress={getInstallationAddress}
          />

          {/* Tanda Tangan */}
          <Signs id={id} getSigns={getSigns} />

          {/* Kelengkapan DOkumen */}
          <DocumentReq getDocumentReq={getDocumentReq} />
          {isLoading ? (
            <button type="submit" className="btn btn-proses" disabled>
              <Spinner />
            </button>
          ) : (
            <button type="submit" className="btn btn-proses">
              <SaveIcon />
              <span>Simpan</span>
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormEdit;
