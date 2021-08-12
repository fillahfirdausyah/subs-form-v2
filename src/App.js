// Asset
import "./App.css";

// Context
import { AnimateProvider } from "./Context/Animate";

// Component
import { Header, Sidebar, LayerForm } from "./Component";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <>
      <AnimateProvider>
        <div className="app">
          <Header />
          <Sidebar />
          <Dashboard />
          <LayerForm />
        </div>
      </AnimateProvider>
    </>
  );
}

export default App;
