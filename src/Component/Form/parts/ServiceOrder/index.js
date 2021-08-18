import React, { useState } from "react";

import Radio from "../../../Radio";

const radioData = [
  {
    name: "serviceOrder",
    label: "INTERNET",
  },
  {
    name: "serviceOrder",
    label: "VOIP",
  },
  {
    name: "serviceOrder",
    label: "VPS",
  },
  {
    name: "serviceOrder",
    label: "SOFTWARE AS SERVICE",
  },
];

function ServiceOrder({ getServiceOrder }) {
  const [data, setData] = useState({
    spesifikasiLayanan: "",
    informasiTambahan: "",
  });

  const serviceOrderDataHandler = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
    getServiceOrder(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Layanan Yang Diminta</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Jenis Layanan</label>
          <div className="radio-flex">
            {radioData.map((x, index) => (
              <Radio
                key={index}
                label={x.label}
                name={x.name}
                id={x.label}
                value={x.label}
                onChange={serviceOrderDataHandler}
              />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Spesifikasi Layanan</label>
          <input
            onChange={serviceOrderDataHandler}
            type="text"
            className="form-control"
            value={data.spesifikasiLayanan}
            name="spesifikasiLayanan"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Informasi Tambahan</label>
          <input
            onChange={serviceOrderDataHandler}
            type="text"
            className="form-control"
            value={data.informasiTambahan}
            name="informasiTambahan"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceOrder;
