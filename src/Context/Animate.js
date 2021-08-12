import React, { createContext, useContext, useState } from "react";

const AnimateContext = createContext();

export function useAnimate() {
  return useContext(AnimateContext);
}

export function AnimateProvider({ children }) {
  const [animate, setAnimate] = useState("");
  const [backDrop, setBackDrop] = useState("");

  function addAnimate(val) {
    setAnimate(val);
  }

  function addBackdrop(val) {
    setBackDrop(val);
  }

  const value = {
    animate,
    addAnimate,
    backDrop,
    addBackdrop,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
}
