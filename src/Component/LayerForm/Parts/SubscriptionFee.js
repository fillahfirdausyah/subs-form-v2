import React, { useState, useEffect } from "react";
import { useAnimate } from "../../../Helpers/Context/Animate";

function SubscriptionFee({ getSubscriptionFee }) {
  const { animate } = useAnimate();
  const [data, setData] = useState({
    biayaSetup: "",
    biayaLayanan: "",
  });

  useEffect(() => {
    if (animate == "up") {
      setData({
        biayaSetup: "",
        biayaLayanan: "",
      });
    }
  }, [animate]);

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
        required
      />
      <input
        type="number"
        id="price"
        placeholder="Biaya Layanan"
        value={data.biayaLayanan}
        name="biayaLayanan"
        onChange={handleChange}
        required
      />
    </>
  );
}

export default SubscriptionFee;
