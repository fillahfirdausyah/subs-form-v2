import React, { useState } from "react";

function InstallationAddress({ getInstallationAddress }) {
  const [data, setData] = useState({});

  const installationAddressDataHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      [name]: value,
    };
    setData(newData);
    getInstallationAddress(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Alamat Installasi</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <textarea
            onChange={installationAddressDataHandler}
            className="form-control"
            name="installationAddress"
            value={data.installationAddress}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default InstallationAddress;
