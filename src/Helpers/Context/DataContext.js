import React, { createContext, useContext, useState, useEffect } from "react";
import { database } from "../../firebase";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState({});

  function editData(id) {
    let ref = database.ref(`data-v2/${id}`);
    ref.on("value", (snap) => {
      setData(snap.val());
    });
  }

  const value = {
    editData,
    data,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
