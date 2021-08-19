import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { database } from "../../firebase";

// Component
import Form from "../../Component/Form";
import { FilledFormPage } from "../index";

function ClientForm() {
  const { id, token } = useParams();
  const [haveToken, setHaveToken] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let check = localStorage.getItem("document-token");
    if (check == null) {
      setHaveToken(false);
    } else {
      setHaveToken(true);
    }
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
      {haveToken ? (
        <FilledFormPage />
      ) : (
        <Form postData={postData} id={id} token={token} />
      )}
    </>
  );
}

export default ClientForm;
