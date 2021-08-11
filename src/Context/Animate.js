import React, { createContext, useContext, useState } from "react";

const AnimateContext = createContext();

export function useAnimate() {
  return useContext(AnimateContext);
}

export function AnimateProvider({ children }) {
  const [animate, setAnimate] = useState("");

  function addAnimate(val) {
    setAnimate(val);
  }

  const value = {
    animate,
    addAnimate,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
}
