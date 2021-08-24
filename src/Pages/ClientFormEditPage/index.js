import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";

// Component
import FormEdit from "../../Component/FormEdit";
import { FourZeroFour } from "../index";

function ClientFormEidtPage() {
  const { id, token } = useParams();
  const [tokenIsValid, setTokenIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      let theData = snap.val();
      if (theData.token === token) {
        setTokenIsValid(true);
      } else {
        setTokenIsValid(false);
      }
    });
  }, []);

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
      {tokenIsValid ? (
        <FormEdit
          isLoading={isLoading}
          postEditHandler={postEditHandler}
          id={id}
          token={token}
        />
      ) : (
        <FourZeroFour />
      )}
    </>
  );
}

export default ClientFormEidtPage;
