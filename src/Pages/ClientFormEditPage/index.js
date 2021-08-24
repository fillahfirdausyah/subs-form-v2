import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { database, storage } from "../../firebase";
// import { useAnimate } from "../../Helpers/Context/Animate";

// Component
import FormEdit from "../../Component/FormEdit";
// import { AlertDanger } from "../../Component/Alert";

function ClientFormEidtPage() {
  const { id, token } = useParams();
  // const { addAlert, alert, alertMessage } = useAnimate();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const postEditHandler = async (data) => {
    if (Object.keys(data.documentReq).length !== 0) {
      setIsLoading(true);
      await database.ref(`data-v2/${id}`).update(data);
      if (data.signs.ttd) {
        let storageRef = storage.ref();
        const fileRef = storageRef.child(`images/${data.signs.fileName}`);
        await fileRef.put(data.signs.ttd);
      }
      setIsLoading(false);
      history.push("/success");
    } else {
      alert("Kelengkapan Dokumen Kosong");
    }
  };

  return (
    <>
      <FormEdit
        isLoading={isLoading}
        postEditHandler={postEditHandler}
        id={id}
        token={token}
      />
      {/* <AlertDanger message={alertMessage} visibility={alert} /> */}
    </>
  );
}

export default ClientFormEidtPage;
