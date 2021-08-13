import React from "react";

// Asset
import "./style.css";
import Main from "../Main";

function Dashboard() {
  return (
    <div className="dashboard">
      <Main title="Dashboard">
        <div className="row">
          <div className="col-lg-8 col-md-12">
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
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>PT. Buana Lintas Media</td>
                      <td>Fillah</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header">
                <h5>Dokumen Belum Terisi</h5>
              </div>
              <div className="card-body">
                <table>
                  <tr>
                    <td>No</td>
                    <td>Nomor FPB</td>
                    <td>Aksi</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>0129381239</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1982391283</td>
                  </tr>
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
