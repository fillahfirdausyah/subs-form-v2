// Asset
import "./App.css";
import Router from "./Route";

// Context
import { AnimateProvider } from "./Context/Animate";

function App() {
  return (
    <>
      <AnimateProvider>
        <div className="app">
          <Router />
        </div>
      </AnimateProvider>
    </>
  );
}

export default App;
