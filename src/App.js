// Asset
import Router from "./Route";

// Context
import { AnimateProvider } from "./Helpers/Context/Animate";
import { AuthProvider } from "./Helpers/Context/AuthContext";

function App() {
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
