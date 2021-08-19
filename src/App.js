import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset
import Router from "./Route";

// Context
import { AnimateProvider } from "./Helpers/Context/Animate";
import { AuthProvider } from "./Helpers/Context/AuthContext";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <AuthProvider>
        <AnimateProvider>
          <Router />
        </AnimateProvider>
      </AuthProvider>
    </>
  );
}

export default App;
