import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "../../firebase";

// Component
import Form from "../../Component/Form";
import { FourZeroFour } from "../index";

function ClientForm() {
  const { id, token } = useParams();
  const history = useHistory();
  const [tokenIsValid, setTokenIsValid] = useState(true);

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
    const newData = {
      ...data,
      status: "filled",
    };
    await database.ref(`data-v2/${id}`).update(newData);
    history.push("/success");
  };

  return (
    <>
      {tokenIsValid ? (
        <Form postData={postData} id={id} token={token} />
      ) : (
        <FourZeroFour />
      )}
    </>
  );
}

export default ClientForm;
