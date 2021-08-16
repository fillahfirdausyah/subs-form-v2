import React from "react";

import { useParams } from "react-router-dom";

// Component
import Form from "../../Component/Form";

function ClientForm() {
  const { id, token } = useParams();
  return (
    <>
      <Form />
    </>
  );
}

export default ClientForm;
