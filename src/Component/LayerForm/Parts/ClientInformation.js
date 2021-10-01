import React, { useState } from "react";

function ClientInformation({ getClientInformation }) {
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
    </>
  );
}

export default ClientInformation;
