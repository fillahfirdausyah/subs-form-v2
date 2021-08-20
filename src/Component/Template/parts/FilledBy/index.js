import React, { useEffect, useState } from "react";
import { database } from "../../../../firebase";

// Component
import { CheckboxTemplate } from "../../../Checkbox";

const checkboxData = [
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

function FilledBy({ data, id }) {
  const [newCheckbocxData, setNewCheckboxData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      checkboxData.forEach((x) => {
        let key = Object.keys(theData.documentReq);
        for (let i in key) {
          if (key[i] === x.name) {
            x.checked = true;
          }
        }
      });
    });
    setNewCheckboxData(checkboxData);
  }, []);

  return (
    <>
      <div className="filled-by">
        <table className="filled-table">
          <thead>
            <th colSpan="2">
              <span className="font-bold">Diisi oleh Buanalintas</span>{" "}
              <span className="font-italic">/ Filled by Buanalintas</span>
            </th>
          </thead>
          <tr>
            <tbody>
              <table style={{ width: "300px" }}>
                <tr>
                  <td>Marketing</td>
                  {data == undefined ? <td>: </td> : <td> : {data.nama}</td>}
                </tr>
                <tr>
                  <td>Tanggal / Date</td>
                  {data == undefined ? <td>: </td> : <td>: {data.tanggal}</td>}
                </tr>
              </table>
            </tbody>
            <td></td>
          </tr>
          <tr>
            <div className="dokumen">
              <span className="font-bold">
                Kelengkapan dokumen pelanggan baru
              </span>{" "}
              <span className="font-italic">
                / Documents Requirements for New Customer
              </span>
              <div className="input-document">
                {newCheckbocxData.map((x, index) => (
                  <div className="row">
                    <div className="col">
                      <CheckboxTemplate
                        key={index}
                        label={x.label}
                        name={x.name}
                        checked={x.checked}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default FilledBy;
