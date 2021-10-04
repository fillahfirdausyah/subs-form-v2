import React from "react";

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

function TypeOfOrder() {
  return (
    <>
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
              required={false}
              //   onChange={typeofOrderHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TypeOfOrder;
