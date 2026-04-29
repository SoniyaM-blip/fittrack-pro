import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-animation"></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          FitTrack Pro 💪
        </h1>

        <p className="text-lg mb-6 text-white/90">
          Track workouts, calories, and goals with real-time insights.
          Build a healthier version of yourself every day.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 rounded-full border border-white"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}