import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

function InstallationAddress({ getInstallationAddress, id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    database
      .ref(`data-v2/${id}`)
      .get()
      .then((snap) => {
        let theData = snap.val();
        setData(theData.installationAddress);
      });
  }, []);

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
            required
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
