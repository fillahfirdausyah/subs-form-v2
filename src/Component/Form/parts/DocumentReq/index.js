import React, { useState, useEffect } from "react";
import CheckBox from "../../../Checkbox";

const checkBoxData = [
  {
    label: "Fotokopi KTP / Paspor / Copy of ID / Passport",
    name: "Fotokpoi KTP Paspor",
  },
  {
    label: "Fotokopi NPWP / Copy of Tax Registered Number",
    name: "Fotokopi NPWP",
  },
  {
    label: "Surat Kuasa (apabila dikuasakan)",
    name: "Surat Kuasa",
  },
];

function DocumentReq({ getDocumentReq }) {
  const [data, setData] = useState({});

  useEffect(() => {
    getDocumentReq(data);
  }, [data]);

  const documentReqDataHandler = (e) => {
    const { name, checked } = e.target;
    const newData = {
      ...data,
      [name]: checked,
    };
    setData(newData);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Kelengkapan Document</h4>
      </div>
      <div className="card-body">
        {checkBoxData.map((x, index) => (
          <CheckBox
            onChange={documentReqDataHandler}
            key={index}
            label={x.label}
            checked={data[x.name] || ""}
            name={x.name}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

export default DocumentReq;
