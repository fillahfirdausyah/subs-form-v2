import React, { useState } from "react";
import { storage, database } from "../../firebase";
import { useAnimate } from "../../Helpers/Context/Animate";

import { Sidebar, Header, Dashboard, LayerForm } from "../../Component";
import { AlertSuccess } from "../../Component/Alert";

function DashboardPage() {
  const { addAlert, alert, alertMessage, addAnimate, addBackdrop } =
    useAnimate();
  const [loading, setLoading] = useState(false);
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

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard editedHandler={editedHandler} />
      <LayerForm postData={postHandler} loading={loading} />
      <AlertSuccess message={alertMessage} visibility={alert} />
    </>
  );
}

export default DashboardPage;
