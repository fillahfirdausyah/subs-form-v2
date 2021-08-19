import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Component
import Form from "../../Component/Form";
import { FilledFormPage } from "../index";

function ClientForm() {
  const { id, token } = useParams();
  const [haveToken, setHaveToken] = useState(null);

  useEffect(() => {
    let check = localStorage.getItem("document-token");
    if (check == null) {
      setHaveToken(false);
    } else {
      setHaveToken(true);
    }
  }, []);

  const postData = (data) => {};

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
