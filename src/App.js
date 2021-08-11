// Asset
import "./App.css";

// Context
import { AnimateProvider } from "./Context/Animate";

// Component
import { Header, Sidebar } from "./Component";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <>
      <AnimateProvider>
        <div className="app">
          <Header />
          <Sidebar />
          <Dashboard />
        </div>
      </AnimateProvider>
    </>
  );
}

export default App;
