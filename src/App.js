// Asset
import "./App.css";

// Component
import { Header, Sidebar } from "./Component";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
