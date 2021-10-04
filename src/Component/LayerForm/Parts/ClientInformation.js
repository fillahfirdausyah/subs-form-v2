import React, { useState } from "react";

import Radio from "../../Radio";

const radioData = [
  {
    name: "TypeofOrder",
    label: "New Installation",
  },
  {
    name: "TypeofOrder",
    label: "Upgrade",
  },
  {
    name: "TypeofOrder",
    label: "Down Grade",
  },
  {
    name: "TypeofOrder",
    label: "Renewal",
  },
];

function ClientInformation({ getClientInformation, getTypeofOrder }) {
  const [data, setData] = useState({
    companyName: "",
    authorized: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
    getClientInformation(newData);
  };

  const typeofOrderHandler = (e) => {
    const { value, checked } = e.target;
    getTypeofOrder({ [value]: checked });
  };

  return (
    <>
      <h3>Informasi Client</h3>
      <input
        type="text"
        name="companyName"
        placeholder="Nama Perusahaan"
        value={data.companyName}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="authorized"
        placeholder="Penanggung Perusahaan"
        value={data.authorized}
        onChange={changeHandler}
      />
      <h3>Jenis Permintaan</h3>
      <div className="jenis-permintaan-layer-form-wrapper">
        <div className="jenis-permintaan-layer-form radio-flex">
          {radioData.map((x, index) => (
            <Radio
              label={x.label}
              key={index}
              id={x.label}
              value={x.label}
              name={x.name}
              onChange={typeofOrderHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ClientInformation;
