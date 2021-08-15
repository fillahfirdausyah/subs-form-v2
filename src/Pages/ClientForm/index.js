import React from "react";

import { useParams } from "react-router-dom";

function ClientForm() {
  const { id, token } = useParams();
  return (
    <div>
      <h1>Client Form</h1>
      <p>{id}</p>
      <p>{token}</p>
    </div>
  );
}

export default ClientForm;
