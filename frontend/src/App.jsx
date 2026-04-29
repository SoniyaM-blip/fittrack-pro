import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* APP ROUTES */}
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workouts" element={<Workouts />} />

      </Routes>
    </BrowserRouter>
  );
}