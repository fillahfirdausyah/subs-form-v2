import React, { useState, useEffect } from "react";
import { database } from "../../firebase";
import { useParams } from "react-router-dom";

// Component
import Form from "../../Component/Form";
import { FourZeroFour } from "../index";

function ClientForm() {
  const { id, token } = useParams();
  const [tokenIsValid, setTokenIsValid] = useState(true);
  console.log("1");

  useEffect(() => {
    console.log("2");
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

  const postData = (data) => {
    console.log(data);
  };

  if (!tokenIsValid) {
    return <FourZeroFour />;
  }

  return (
    <>
      <Form postData={postData} id={id} token={token} />
    </>
  );
}

export default ClientForm;
