import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Compoenent
import Radio from "../../../Radio";

function Authorized({ data, uid, id }) {
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
              <input type="text" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Tempat, Tanggal Lahir /</p>{" "}
              <p className="font-italic">Place, Date of Birth</p>
            </td>
            <td>
              <input type="text" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Jabatan /</p> <p className="font-italic">Position</p>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <p>Telepone /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input type="text" />
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
            <td className="id-card"></td>
          </tr>
          <tr>
            <td>
              <p>No. Kartu Identitas /</p>{" "}
              <p className="font-italic">ID Card Number</p>
            </td>
            <td>
              <input type="text" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Masa Berlaku /</p> <p className="font-italic">Valid Until</p>
            </td>
            <td>
              <input type="text" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Alamat Email /</p> <p className="font-italic">Email Address</p>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Authorized;
