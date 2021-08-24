import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Component
import { CheckboxTemplate } from "../../../Checkbox";

const checkboxData = [
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
    label: "SOFTWARE AS SERVICE ",
  },
];

function ServiceOrder({ data, id }) {
  const [newCheckboxData, setNewCheckboxData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      checkboxData.forEach((x) => {
        if (x.checked == true) {
          x.checked = false;
        }
        if (theData.serviceOrder.serviceOrder == x.label) {
          x.checked = true;
        }
      });
    });
    setNewCheckboxData(checkboxData);
  }, []);

  return (
    <div className="services-order">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">LAYANAN YANG DIMINTA</span>{" "}
            <span className="font-italic">/ Services Order</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Jenis Layanan /</p>{" "}
              <p className="font-italic">Kind of Services</p>
            </td>
            <td className="services" colSpan="2">
              {newCheckboxData.map((x, index) => (
                <CheckboxTemplate
                  key={index}
                  label={x.label}
                  id={index}
                  checked={x.checked && true}
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <p>Spesifikasi Layanan /</p>{" "}
              <p className="font-italic">Spesification of Services</p>
            </td>
            <td>
              <input type="text" value={data.spesifikasiLayanan} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Informasi Tambahan /</p>{" "}
              <p className="font-italic">Additional Info</p>
            </td>
            <td>
              <input type="text" value={data.informasiTambahan} disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceOrder;
