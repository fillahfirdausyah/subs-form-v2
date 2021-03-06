import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database, storage } from "../../firebase";

// Component
import Form from "../../Component/Form";
import { FourZeroFour } from "../index";

function ClientForm() {
  const { id, token } = useParams();
  const history = useHistory();
  const [tokenIsValid, setTokenIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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

  const postData = async (data) => {
    setIsLoading(true);
    await database.ref(`data-v2/${id}`).update(data);
    let storageRef = storage.ref();
    const fileRef = storageRef.child(`images/${data.signs.fileName}`);
    await fileRef.put(data.signs.ttd);
    setIsLoading(false);
    history.push("/success");
  };

  return (
    <>
      {tokenIsValid ? (
        <Form postData={postData} id={id} token={token} isLoading={isLoading} />
      ) : (
        <FourZeroFour />
      )}
    </>
  );
}

export default ClientForm;
