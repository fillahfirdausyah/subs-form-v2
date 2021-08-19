import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Component
import Radio from "../../../Radio";

function TypeofOrder({ data, uid, id }) {
  return (
    <div className="type-of-order">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">JENIS PERMINTAAN</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Jenis permintaan / Type of Order</p>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TypeofOrder;
