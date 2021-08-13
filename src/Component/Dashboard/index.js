import React, { useState, useEffect } from "react";
import { database } from "../../firebase";

// Asset
import "./style.css";
import Main from "../Main";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let ref = database.ref(`data-v2`);
    ref.on("value", (snap) => {
      const theData = snap.val();
      const newData = [];
      for (const key in theData) {
        const x = {
          id: key,
          ...theData[key],
        };

        newData.push(x);
      }
      setData(newData);
    });
  }, []);

  return (
    <div className="dashboard">
      <Main title="Dashboard">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>List Client</h5>
              </div>
              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <td>No</td>
                      <td>Nama Perusahaan</td>
                      <td>Penanggung Jawab</td>
                      <td>Aksi</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>PT. Buana Lintas Media</td>
                      <td>Fillah</td>
                      <td>
                        <button>1</button>
                        <button>2</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>PT. Buana Lintas Media</td>
                      <td>Fillah</td>
                      <td>
                        <button>1</button>
                        <button>2</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>Dokumen Belum Terisi</h5>
              </div>
              <div className="card-body">
                <table>
                  <thead>
                    <tr>
                      <td>No</td>
                      <td>Nomor FPB</td>
                      <td>Aksi</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((x, index) => (
                      <tr key={x.id}>
                        <td>{index + 1}</td>
                        <td>{x.information.fpb}</td>
                        <td>
                          <button>1</button>
                          <button>2</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Dashboard;
