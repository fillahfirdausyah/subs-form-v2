import React from "react";

import CurrencyFormat from "react-currency-format";

function SubscriptionFee({ data }) {
  return (
    <div className="subscription-fee">
      <table>
        <thead>
          <th colSpan="2">
            <span className="font-bold">BIAYA BERLANGGANAN</span>{" "}
            <span className="font-italic">/ Subscription Fee</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Biaya Set Up/</p> <p className="font-italic">Set Up Cost</p>
              <br />
              <span>(One Time Charge)</span>
            </td>
            <td>
              {/* <input type="text" value={`Rp ${data.biayaSetup}`} disabled /> */}
              <CurrencyFormat
                value={data.biayaSetup}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
                renderText={(value) => (
                  <input type="text" value={`${value},-`} disabled />
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p style={{ marginTop: "30px" }}>Biaya Layanan /</p>{" "}
              <p className="font-italic">Cost of Services</p>
              <br />
              <span>(Monthly Charge)</span>
            </td>
            <td>
              {/* <input type="text" value={`Rp ${data.biayaLayanan}`} disabled /> */}
              <CurrencyFormat
                value={data.biayaLayanan}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
                renderText={(value) => (
                  <input type="text" value={`${value},-`} disabled />
                )}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SubscriptionFee;
