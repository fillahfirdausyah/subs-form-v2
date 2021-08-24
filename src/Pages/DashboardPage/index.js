import React, { useState, useEffect } from "react";
import { storage, database } from "../../firebase";
import { useAnimate } from "../../Helpers/Context/Animate";

import {
  Sidebar,
  Header,
  Dashboard,
  LayerForm,
  LayerFormEdit,
} from "../../Component";
import { AlertSuccess } from "../../Component/Alert";

function DashboardPage() {
  const {
    addAlert,
    alert,
    alertMessage,
    addAnimate,
    addBackdrop,
    showLayerFormEdit,
    layerFormEdit,
    addBackdropEdit,
  } = useAnimate();
  const [loading, setLoading] = useState(false);
  const [dataEditID, setDataEditID] = useState("");
  const postHandler = async (data) => {
    try {
      setLoading(true);
      await database.ref(`data-v2`).push(data);
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.filledBy.imgName}`);
      await fileRef.put(data.filledBy.ttd);
      addAlert("show", "Berhasil Membuat Document");
      setLoading(false);
      addAnimate("down");
      addBackdrop("not-show");
      setTimeout(() => addAlert("close", ""), 5000);
    } catch (err) {
      alert(err);
    }
  };

  const editedHandler = (data, id) => {
    const newData = {
      ...data,
      status: "edit",
    };
    database.ref(`data-v2/${id}`).update(newData);
  };

  useEffect(() => {
    setDataEditID(dataEditID);
  }, [dataEditID]);

  const getID = (id) => {
    setDataEditID(id);
  };

  const editMarketingHandler = async (data, id) => {
    setLoading(true);
    if (data.filledBy.ttd) {
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.filledBy.imgName}`);
      await fileRef.put(data.filledBy.ttd);
    }
    await database.ref(`data-v2/${id}`).update(data);
    addAlert("show", "Berhasil Mengedit");
    setLoading(false);
    showLayerFormEdit("down");
    addBackdropEdit("not-show");
    setTimeout(() => addAlert("close", ""), 5000);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard editedHandler={editedHandler} getID={getID} />
      <LayerForm postData={postHandler} loading={loading} />
      <LayerFormEdit
        id={dataEditID}
        editData={editMarketingHandler}
        loading={loading}
      />
      <AlertSuccess message={alertMessage} visibility={alert} />
    </>
  );
}

export default DashboardPage;
