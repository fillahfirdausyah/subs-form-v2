import React, { createContext, useContext, useState } from "react";

const AnimateContext = createContext();

export function useAnimate() {
  return useContext(AnimateContext);
}

export function AnimateProvider({ children }) {
  const [animate, setAnimate] = useState("");
  const [backdrop, setBackDrop] = useState("");
  const [alert, setAlert] = useState("");

  function addAnimate(val) {
    setAnimate(val);
  }

  function addBackdrop(val) {
    setBackDrop(val);
  }

  function addAlert(val) {
    setAlert(val);
  }

  const value = {
    animate,
    addAnimate,
    backdrop,
    addBackdrop,
    alert,
    addAlert,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
}
