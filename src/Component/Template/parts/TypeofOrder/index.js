import React, { useState, useEffect } from "react";
import { database } from "../../../../firebase";

// Component
import { CheckboxTemplate } from "../../../Checkbox";

const checkboxData = [
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

function TypeofOrder({ id }) {
  const [newCheckboxData, setNewCheckboxData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      checkboxData.forEach((x) => {
        if (x.checked == true) {
          x.checked = false;
        }
        if (Object.keys(theData.typeofOrder) == x.label) {
          x.checked = true;
        }
      });
    });
    setNewCheckboxData(checkboxData);
  }, []);

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
            <td>
              {newCheckboxData.map((x, index) => (
                <CheckboxTemplate
                  key={index}
                  id={index}
                  value={x.val}
                  name={x.name}
                  label={x.label}
                  checked={x.checked && true}
                />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TypeofOrder;
