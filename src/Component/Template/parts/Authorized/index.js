import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Compoenent
import { CheckboxTemplate } from "../../../Checkbox";

const checkboData = [
  {
    name: "kartuID",
    label: "KTP",
  },
  {
    name: "kartuID",
    label: "KIM-S",
  },
  {
    name: "kartuID",
    label: "SIM",
  },
  {
    name: "kartuID",
    label: "PASPOR",
  },
];

function Authorized({ data, id }) {
  const [newCheckboxData, setNewCheckboxData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      checkboData.forEach((x) => {
        if (theData.authorized.idCard == x.label) {
          x.checked = true;
        }
      });
    });
    setNewCheckboxData(checkboData);
  }, []);

  return (
    <div className="authorized-person new-page">
      <div className="section1">
        <p>
          FORMULIR PENDAFTARAN BERLANGGANAN (Subscription Form)
          <br />
          SOFTWARE & INTERNET SERVICE PROVIDER
        </p>
      </div>
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">PENANGGUNG JAWAB PERUSAHAAN</span>{" "}
            <span className="font-italic">/ Authorized Person</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Nama /</p> <p className="font-italic"> Name</p>
            </td>
            <td>
              <input type="text" value={data.nama} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Tempat, Tanggal Lahir /</p>{" "}
              <p className="font-italic">Place, Date of Birth</p>
            </td>
            <td>
              <input
                type="text"
                value={`${data.ttlTempat}, ${data.ttlTggl}`}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Jabatan /</p> <p className="font-italic">Position</p>
            </td>
            <td>
              <input type="text" value={data.jabatan} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Telepone /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input type="text" value={data.telephone} disabled />
              <br />
              <p>Kode Area / </p> <p className="font-italic">Area Code</p>
              {" | "}
              <p>Nomor / </p> <p className="font-italic">Number</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Kartu Identitas /</p> <p className="font-italic">ID Card</p>
            </td>
            <td className="id-card">
              {newCheckboxData.map((x, index) => (
                <CheckboxTemplate
                  key={index}
                  label={x.label}
                  name={x.nama}
                  checked={x.checked && true}
                />
              ))}
            </td>
          </tr>
          <tr>
            <td>
              <p>No. Kartu Identitas /</p>{" "}
              <p className="font-italic">ID Card Number</p>
            </td>
            <td>
              <input type="text" value={data.noIdCard} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Masa Berlaku /</p> <p className="font-italic">Valid Until</p>
            </td>
            <td>
              <input type="text" value={data.masaBerlaku} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat Email /</p> <p className="font-italic">Email Address</p>
            </td>
            <td>
              <input type="text" value={data.alamatEmail} disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Authorized;
