import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import TodoListDashboard from "./todolist/TodoListDashboard";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/todolist/:id" element={<TodoListDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
