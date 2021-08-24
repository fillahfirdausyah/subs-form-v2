import React, { createContext, useContext, useState } from "react";

const AnimateContext = createContext();

export function useAnimate() {
  return useContext(AnimateContext);
}

export function AnimateProvider({ children }) {
  const [animate, setAnimate] = useState("");
  const [backdrop, setBackDrop] = useState("");
  const [backdropEdit, steBackdropEdit] = useState("");
  const [alert, setAlert] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [layerFormEdit, setLayerFormEdit] = useState("");

  function addAnimate(val) {
    setAnimate(val);
  }

  function addBackdrop(val) {
    setBackDrop(val);
  }

  function addBackdropEdit(val) {
    steBackdropEdit(val);
  }

  function addAlert(val, message) {
    setAlert(val);
    setAlertMessage(message);
  }

  function showLayerFormEdit(val) {
    setLayerFormEdit(val);
  }

  const value = {
    animate,
    addAnimate,
    backdrop,
    addBackdrop,
    backdropEdit,
    addBackdropEdit,
    alert,
    alertMessage,
    addAlert,
    layerFormEdit,
    showLayerFormEdit,
  };

  return (
    <AnimateContext.Provider value={value}>{children}</AnimateContext.Provider>
  );
}
