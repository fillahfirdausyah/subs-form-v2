import React from "react";

import Radio from "../../../Radio";

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

function TypeofOrder({ getTypeofOrder }) {
  const typeofOrderHandler = (e) => {
    const { value, checked } = e.target;
    getTypeofOrder({ [value]: checked });
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Jenis Permintaan</h4>
      </div>
      <div className="form-text-force">{"*)"} Pilih Ulang</div>
      <div className="card-body radio-flex">
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
  );
}

export default TypeofOrder;
