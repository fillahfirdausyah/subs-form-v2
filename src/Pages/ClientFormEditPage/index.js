import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

// Component
import FormEdit from "../../Component/FormEdit";

function ClientFormEidtPage() {
  const { id, token } = useParams();

  return (
    <>
      <FormEdit id={id} token={token} />
    </>
  );
}

export default ClientFormEidtPage;
