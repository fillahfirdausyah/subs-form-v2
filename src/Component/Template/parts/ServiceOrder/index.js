import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Component
import Radio from "../../../Radio";

function ServiceOrder({ data, uid, id }) {
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
            <td className="services" colSpan="2"></td>
          </tr>
          <tr>
            <td>
              <p>Spesifikasi Layanan /</p>{" "}
              <p className="font-italic">Spesification of Services</p>
            </td>
            <td>
              <input type="text" disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Informasi Tambahan /</p>{" "}
              <p className="font-italic">Additional Info</p>
            </td>
            <td>
              <input type="text" disabled />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServiceOrder;
