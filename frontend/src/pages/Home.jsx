import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthBackground from "../components/AuthBackground";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <AuthBackground>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          FitTrack Pro 💪
        </h1>

        <p className="text-white/80 mb-6">
          Track workouts, calories & goals in one place.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 bg-white text-black rounded-full"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 border border-white rounded-full"
          >
            Register
          </button>
        </div>
      </div>
    </AuthBackground>
  );
}