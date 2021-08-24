import React, { useState, useEffect } from "react";
import { database } from "../../../firebase";

function SubscriptionFee({ id, getSubscriptionFee }) {
  const [data, setData] = useState({
    biayaSetup: "",
    biayaLayanan: "",
  });

  useEffect(() => {
    if (id === "") {
      console.log("kosong");
    } else {
      database
        .ref(`data-v2/${id}`)
        .get()
        .then((snap) => {
          let theData = snap.val();
          setData(theData.subscriptionFee);
        });
    }
  }, [id]);

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
