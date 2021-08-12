import React, { createContext, useContext, useState } from "react";

const AnimateContext = createContext();

export function useAnimate() {
  return useContext(AnimateContext);
}

export function AnimateProvider({ children }) {
  const [animate, setAnimate] = useState("");
  const [backdrop, setBackDrop] = useState("");

  function addAnimate(val) {
    setAnimate(val);
  }

  function addBackdrop(val) {
    setBackDrop(val);
  }

  const value = {
    animate,
    addAnimate,
    backdrop,
    addBackdrop,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
}
