import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

function BillingAddress({ getBillingAddress, id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    database
      .ref(`data-v2/${id}`)
      .get()
      .then((snap) => {
        let theData = snap.val();
        setData(theData.billingAddress);
      });
  }, []);

  useEffect(() => {
    getBillingAddress(data);
  }, [data]);

  const billingAddressDataHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      [name]: value,
    };
    setData(newData);
    getBillingAddress(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Alamat Penagihan</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <textarea
            required
            onChange={billingAddressDataHandler}
            className="form-control"
            name="billingAddress"
            value={data.billingAddress}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default BillingAddress;
