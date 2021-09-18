import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Asset
import Router from "./Route";

// Context
import { AnimateProvider } from "./Helpers/Context/Animate";
import { AuthProvider } from "./Helpers/Context/AuthContext";
import { DataProvider } from "./Helpers/Context/DataContext";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <AuthProvider>
        <AnimateProvider>
          <DataProvider>
            <Router />
          </DataProvider>
        </AnimateProvider>
      </AuthProvider>
    </>
  );
}

export default App;
