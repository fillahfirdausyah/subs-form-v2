import React, { useState } from "react";

function SubscriptionFee({ getSubscriptionFee }) {
  const [data, setData] = useState({
    biayaSetup: "",
    biayaLayanan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getSubscriptionFee(newData);
  };

  return (
    <>
      <h3>Biaya Berlangganan</h3>
      <input
        type="number"
        id="price"
        placeholder="Biaya Setup"
        value={data.biayaSetup}
        name="biayaSetup"
        onChange={handleChange}
      />
      <input
        type="number"
        id="price"
        placeholder="Biaya Layanan"
        value={data.biayaLayanan}
        name="biayaLayanan"
        onChange={handleChange}
      />
    </>
  );
}

export default SubscriptionFee;
