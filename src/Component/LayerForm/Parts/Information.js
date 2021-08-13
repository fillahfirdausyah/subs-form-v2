import React, { useState, useEffect } from "react";

function Information({ getInformation }) {
  return (
    <>
      <h3>Informasi</h3>
      <input type="text" id="fpb" placeholder="FPB" />
      <input type="text" id="cid" placeholder="CID" />
    </>
  );
}

export default Information;
