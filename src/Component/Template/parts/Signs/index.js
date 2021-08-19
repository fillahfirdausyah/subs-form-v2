import React, { useEffect, useState } from "react";
import { storage } from "../../../../firebase";

function Signs({ data, filledBy }) {
  const [image, setImage] = useState("");
  const [buana, setBuana] = useState("");

  return (
    <div className="sign">
      <div className="pt-buana">
        <h4>*{")"} PT. Buana Lintas Media</h4>
      </div>
      <div className="pt">
        <h4>*{")"} PT.</h4>
      </div>
      <div className="line-pt-buana">
        <img src={buana || "https://via.placeholder.com/400x300"} alt="" />
      </div>
      <div className="line-pt">
        {/* <input type="text" /> */}
        <img src={image || "https://via.placeholder.com/400x300"} alt="" />
      </div>
    </div>
  );
}

export default Signs;
