import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
    
  );
}

export default App;
