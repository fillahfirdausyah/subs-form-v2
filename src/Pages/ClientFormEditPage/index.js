import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { database, storage } from "../../firebase";

// Component
import FormEdit from "../../Component/FormEdit";

function ClientFormEidtPage() {
  const { id, token } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const postEditHandler = async (data) => {
    setIsLoading(true);
    await database.ref(`data-v2/${id}`).update(data);
    if (data.signs.ttd) {
      let storageRef = storage.ref();
      const fileRef = storageRef.child(`images/${data.signs.fileName}`);
      await fileRef.put(data.signs.ttd);
    }
    setIsLoading(false);
    history.push("/success");
  };

  return (
    <>
      <FormEdit
        isLoading={isLoading}
        postEditHandler={postEditHandler}
        id={id}
        token={token}
      />
    </>
  );
}

export default ClientFormEidtPage;
