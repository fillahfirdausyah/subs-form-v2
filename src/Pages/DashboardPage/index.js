import React, { useState } from "react";
import { storage, database } from "../../firebase";
import { useAnimate } from "../../Helpers/Context/Animate";

import { Sidebar, Header, Dashboard, LayerForm } from "../../Component";
import { AlertSuccess } from "../../Component/Alert";

function DashboardPage() {
  const { addAlert, alert, addAnimate, addBackdrop } = useAnimate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const postHandler = async (data) => {
    try {
      setLoading(true);
      await database.ref(`data-v2`).push(data);
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.filledBy.imgName}`);
      await fileRef.put(data.filledBy.ttd);
      setMessage("Berhasil Membuat Document");
      addAlert("show");
      setLoading(false);
      addAnimate("down");
      addBackdrop("not-show");
      setTimeout(() => addAlert("close"), 5000);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
      <LayerForm postData={postHandler} loading={loading} />
      <AlertSuccess message={message} visibility={alert} />
    </>
  );
}

export default DashboardPage;
