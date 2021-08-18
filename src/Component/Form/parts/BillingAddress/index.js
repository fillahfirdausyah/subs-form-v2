import React, { useState } from "react";

function BillingAddress({ getBillingAddress }) {
  const [data, setData] = useState({});

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
