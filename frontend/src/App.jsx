import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Goals from "./pages/Goals";
import Calories from "./pages/Calories";

import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED PAGES (WITH NAVBAR) */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/workouts"
          element={
            <Layout>
              <Workouts />
            </Layout>
          }
        />

        <Route
          path="/goals"
          element={
            <Layout>
              <Goals />
            </Layout>
          }
        />

        <Route
          path="/calories"
          element={
            <Layout>
              <Calories />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}