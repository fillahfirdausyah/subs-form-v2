import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";

function Signs({ clientSign, filledBy }) {
  const [image, setImage] = useState("");
  const [signBuana, setSignBuana] = useState("");

  useEffect(() => {
    let ref = storage.ref(`images/${filledBy.imgName}`);
    ref.getDownloadURL().then((url) => {
      setSignBuana(url);
    });
    let ref2 = storage.ref(`images/${clientSign.fileName}`);
    ref2.getDownloadURL().then((url) => {
      setImage(url);
    });
  }, []);

  return (
    <div className="sign">
      <div className="pt-buana">
        <h4>*{")"} PT. Buana Lintas Media</h4>
      </div>
      <div className="pt">
        <h4>*{")"} PT.</h4>
      </div>
      <div className="line-pt-buana">
        <img src={signBuana || "https://via.placeholder.com/400x300"} alt="" />
      </div>
      <div className="line-pt">
        {/* <input type="text" /> */}
        <img src={image || "https://via.placeholder.com/400x300"} alt="" />
      </div>
    </div>
  );
}

export default Signs;
