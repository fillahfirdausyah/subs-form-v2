import React, { useState, useEffect } from "react";
import { database } from "../../../firebase";

let roman;

const convertRoman = (x) => {
  if (x === 1) {
    return (roman = "I");
  } else if (x === 2) {
    return (roman = "II");
  } else if (x === 3) {
    return (roman = "III");
  } else if (x === 4) {
    return (roman = "IV");
  } else if (x === 5) {
    return (roman = "V");
  } else if (x === 6) {
    return (roman = "VI");
  } else if (x === 7) {
    return (roman = "VII");
  } else if (x === 8) {
    return (roman = "VIII");
  } else if (x === 9) {
    return (roman = "IX");
  } else if (x === 10) {
    return (roman = "X");
  } else if (x === 11) {
    return (roman = "XI");
  } else if (x === 12) {
    roman = "XII";
  }
};

function Information({ getInformation }) {
  let [no, setNo] = useState(0);

  let ts = Date.now();
  let date_ob = new Date(ts);
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let currentDate = date_ob.toISOString().substring(0, 10);

  const fpb = `/FPB/205/${convertRoman(month)}/${year}`;
  let info1 = "";
  if (no >= 9 && no < 99) {
    info1 = `${year}0${month}0${no + 1}`;
  } else if (no >= 99) {
    info1 = `${year}0${month}${no + 1}`;
  } else {
    info1 = `${year}0${month}00${no + 1}`;
  }

  const hasil = `${info1}${fpb}`;

  useEffect(() => {
    database.ref("data-v2").on("value", (snap) => {
      let countData = snap.numChildren();
      setNo(countData);
    });

    const newData = {
      tggl: currentDate,
      fpb: hasil,
      cid: info1,
    };

    getInformation(newData);
  }, [no]);

  return (
    <>
      <h3>Informasi</h3>
      <input
        type="date"
        id="tanggal"
        placeholder="Tanggal"
        value={currentDate}
        disabled
      />
      <input type="text" id="fpb" placeholder="FPB" value={hasil} disabled />
      <input type="text" id="cid" placeholder="CID" value={info1} disabled />
    </>
  );
}

export default Information;
