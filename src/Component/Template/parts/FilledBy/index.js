import React, { useEffect, useState } from "react";
import Radio from "../../../Radio";
import { database } from "../../../../firebase";

function FilledBy({ data, uid, id }) {
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
                <div className="row">
                  <div className="col"></div>
                </div>
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
