import React from "react";

function AuthorizedTechnical({ data }) {
  return (
    <div className="techinal-authorized-person new-page">
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
            <span className="font-bold">PENANGGUNG JAWAB TEKNIS</span>{" "}
            <span className="font-italic">/ Technical Authorized Person</span>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Nama /</p> <p className="font-italic">Name</p>
            </td>
            <td>
              <input type="text" value={data.nama} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Bagian /</p> <p className="font-italic">Departement</p>
            </td>
            <td>
              <input type="text" value={data.bagian} disabled />
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
              <p>Handphone</p>
            </td>
            <td>
              <input type="text" value={data.handphone} disabled />
            </td>
          </tr>
          <tr>
            <td>
              <p>Fax /</p> <p className="font-italic">Phone</p>
            </td>
            <td>
              <input type="text" value={data.fax} disabled />
              <br />
              <p>Kode Area / </p> <p className="font-italic">Area Code</p>
              {" | "}
              <p>Nomor / </p> <p className="font-italic">Number</p>
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

export default AuthorizedTechnical;
