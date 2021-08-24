import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebase";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

// Compoenent
import Template from "../../Component/Template";

function PreviewPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [fpb, setFpb] = useState("");

  useEffect(() => {
    let ref = database.ref(`/data-v2/${id}`);
    ref.on("value", (snap) => {
      let data = snap.val();
      setData([data]);
      setFpb(data.information.fpb);
    });
  }, []);

  useTitle(fpb);

  return (
    <div>
      <Template data={data} id={id} />
      <button onClick={() => window.print()} className="btn-proses-pdf">
        <PictureAsPdfIcon />
      </button>
    </div>
  );
}

function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
}

export default PreviewPage;
