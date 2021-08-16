import React from "react";

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

function ServiceOrder() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Layanan Yang Diminta</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label className="form-label">Jenis Layanan</label>
            <div className="radio-flex">
              {radioData.map((x, index) => (
                <Radio key={index} label={x.label} name={x.name} id={x.label} />
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Spesifikasi Layanan</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Informasi Tambahan</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ServiceOrder;
