// Asset
import Router from "./Route";

// Context
import { AnimateProvider } from "./Context/Animate";
import { AuthProvider } from "./Context/AuthContext";

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
