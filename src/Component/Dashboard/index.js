import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";
import { useAnimate } from "../../Helpers/Context/Animate";

// Component
import { AlertSuccess } from "../Alert";

// Asset
import "./style.css";
import Main from "../Main";
import LinkIcon from "@material-ui/icons/Link";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AutorenewIcon from "@material-ui/icons/Autorenew";

function Dashboard({ editedHandler, getID }) {
  const {
    addAlert,
    alert,
    alertMessage,
    showLayerFormEdit,
    layerFormEdit,
    addBackdropEdit,
  } = useAnimate();
  const [dataUnfilled, setDataUnfilled] = useState([]);
  const [dataFilled, setDataFilled] = useState([]);
  const history = useHistory();

  useEffect(() => {
    let ref = database.ref(`data-v2`);
    ref.on("value", (snap) => {
      const theData = snap.val();
      const newDataUnfilled = [];
      const newDataFilled = [];
      for (const key in theData) {
        const x = {
          id: key,
          ...theData[key],
        };
        if (x.status === "unfilled") {
          newDataUnfilled.push(x);
        } else {
          newDataFilled.push(x);
        }
      }
      setDataUnfilled(newDataUnfilled);
      setDataFilled(newDataFilled);
    });
  }, []);

  const copyLink = (id, token) => {
    let baseUrl = window.location.origin;
    navigator.clipboard.writeText(`${baseUrl}/form/${id}/${token}`);
    addAlert("show", "Berhasil Copy Link");
    setTimeout(() => addAlert("close", ""), 5000);
  };

  const copyLinkEdit = (id, token) => {
    let baseUrl = window.location.origin;
    navigator.clipboard.writeText(`${baseUrl}/edit/${id}/${token}`);
    addAlert("show", "Berhasil Copy Link");
    setTimeout(() => addAlert("close", ""), 5000);
  };

  const getEdited = (id) => {
    let token = (Math.random() + 1).toString(36).slice(-9);
    const newData = {
      token,
    };
    editedHandler(newData, id);
  };

  const redirectToPreview = (id, token) => {
    // history.push(`/preview/${id}/${token}`);
    const win = window.open(`/preview/${id}/${token}`, "_blank");
    win.focus();
  };

  const showFormEdit = (id) => {
    if (layerFormEdit === "up") {
      showLayerFormEdit("down");
      addBackdropEdit("not-show");
    } else {
      showLayerFormEdit("up");
      addBackdropEdit("show");
    }
    getID(id);
  };

  return (
    <>
      <div className="dashboard">
        <Main title="Dashboard">
          <div className="row">
            <div className="col-lg-7 col-md-12">
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
                        <td>Nama Perusahaan</td>
                        <td>Nama Client</td>
                        <td className="aksi">Aksi</td>
                      </tr>
                    </thead>
                    <tbody>
                      {dataUnfilled.map((x, index) => (
                        <tr key={x.id}>
                          <td>{index + 1}</td>
                          <td>{x.information.fpb}</td>
                          <td>{x.clientInformation.companyName}</td>
                          <td>{x.clientInformation.authorized}</td>
                          <td className="aksi">
                            <button
                              className="btn"
                              onClick={() => copyLink(x.id, x.token)}
                            >
                              <LinkIcon className="copy" color="action" />
                            </button>
                            <button className="btn">
                              <EditIcon className="edit" color="action" />
                            </button>
                            <button className="btn">
                              <DeleteIcon className="delete" color="action" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
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
                        <td className="aksi">Aksi</td>
                      </tr>
                    </thead>
                    <tbody>
                      {dataFilled.map((x, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{x.companyInformation.namaPerusahaan}</td>
                          <td>{x.authorized.nama}</td>
                          <td className="aksi">
                            <button
                              className="btn"
                              onClick={() => redirectToPreview(x.id, x.token)}
                            >
                              <VisibilityIcon className="copy" color="action" />
                            </button>
                            {x.status == "edit" ? (
                              <button
                                className="btn"
                                onClick={() => copyLinkEdit(x.id, x.token)}
                              >
                                <LinkIcon className="copy" color="action" />
                              </button>
                            ) : (
                              <button
                                className="btn"
                                onClick={() => getEdited(x.id)}
                              >
                                <AutorenewIcon
                                  className="edit"
                                  color="action"
                                />
                              </button>
                            )}
                            <button
                              className="btn"
                              onClick={() => showFormEdit(x.id)}
                            >
                              <EditIcon className="edit" color="action" />
                            </button>
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
      <AlertSuccess message={alertMessage} visibility={alert} />
    </>
  );
}

export default Dashboard;
