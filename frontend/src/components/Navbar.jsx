import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("firstName"));

useEffect(() => {
  const syncName = () => {
    setName(localStorage.getItem("firstName"));
  };

  window.addEventListener("storage", syncName);

  return () => window.removeEventListener("storage", syncName);
}, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    navigate("/login");
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">

      <div className="flex items-center justify-between px-8 py-4
        bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
        text-white shadow-lg">

        {/* LOGO */}
        <div className="font-bold text-lg tracking-wide">
          FitTrack Pro
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm">

          <Link to="/" className="hover:opacity-80">
            Home
          </Link>

          <Link to="/dashboard" className="hover:opacity-80">
            Dashboard
          </Link>

          <Link to="/workouts" className="hover:opacity-80">
            Workouts
          </Link>

          {/* NEW: CALORIES TRACKER */}
          <Link to="/calories" className="hover:opacity-80">
            Calories 🍎
          </Link>

          <Link to="/goals" className="hover:opacity-80">
            Goals 🎯
          </Link>

        </div>

        {/* USER + LOGOUT */}
        <div className="flex items-center gap-4">

          <span className="text-white/90 text-sm">
  {name ? `👋 ${name}` : "Guest"}
</span>

          <button
            onClick={logout}
            className="px-4 py-1 rounded-full bg-white text-black text-sm hover:scale-105 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}