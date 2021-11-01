import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";

function Signs({ clientSign, filledBy }) {
  const [image, setImage] = useState("");
  const [signBuana, setSignBuana] = useState("");

  useEffect(() => {
    if (!storage.ref(`images/${filledBy.imgName}`)) {
      let ref = storage.ref(`images/${filledBy.imgName}`);
      ref.getDownloadURL().then((url) => {
        setSignBuana(url);
      });
      let ref2 = storage.ref(`images/${clientSign.fileName}`);
      ref2.getDownloadURL().then((url) => {
        setImage(url);
      });
    }
  }, []);

  return (
    <div className="sign">
      <div className="pt-buana">
        <h4>*{")"} PT. Buana Lintas Media</h4>
      </div>
      <div className="pt">
        <h4>
          *{")"} {clientSign.namaPerusahaan}
        </h4>
      </div>
      <div className="line-pt-buana">
        {signBuana ? <img src={signBuana} alt="" /> : ""}
      </div>
      <div className="line-pt">
        {/* <input type="text" /> */}
        {image ? <img src={image} alt="" /> : ""}
      </div>
    </div>
  );
}

export default Signs;
