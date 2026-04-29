import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("firstName");
    setFirstName(name || "Athlete");
  }, []);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* BACKGROUND (BRIGHT FITNESS STYLE) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* LIGHT GRADIENT OVERLAY (NOT DARK) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 via-pink-400/40 to-orange-300/40" />

      {/* TOP BAR */}
      <div className="relative z-10 flex justify-between items-center p-6">

        <h1 className="text-2xl font-bold tracking-wide">
          FitTrack Pro
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition"
        >
          Dashboard
        </button>

      </div>

      {/* HERO */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-24 px-6">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Welcome Back, {firstName} 💪
        </h2>

        <p className="text-white/90 mt-4 max-w-xl text-lg">
          Track workouts, monitor progress, and build your strongest self.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-8">

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Start Training
          </button>

          <button
            onClick={() => navigate("/workouts")}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            View Workouts
          </button>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center backdrop-blur-md bg-white/10 p-6 rounded-3xl">

          <div>
            <h3 className="text-2xl font-bold">6+</h3>
            <p className="text-white/80 text-sm">Workout Types</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Live</h3>
            <p className="text-white/80 text-sm">Analytics</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-white/80 text-sm">Tracking</p>
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full text-center text-white/70 text-xs p-4">
        © {new Date().getFullYear()} FitTrack Pro
      </div>

    </div>
  );
}