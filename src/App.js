// Asset
import Router from "./Route";

// Context
import { AnimateProvider } from "./Context/Animate";

function App() {
  return (
    <>
      <AnimateProvider>
        <Router />
      </AnimateProvider>
    </>
  );
}

export default App;
