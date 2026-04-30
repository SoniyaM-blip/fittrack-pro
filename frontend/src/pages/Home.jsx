import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col justify-center items-center text-center px-6">

      {/* 🔥 ANIMATED GRADIENT BASE */}
      <div className="absolute inset-0 bg-gradient-animation"></div>

      {/* 🖼 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* 🌈 COLOR OVERLAY (MORE VIBRANT) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-600/60 to-orange-500/60"></div>

      {/* ✨ GLOW BLOBS (MODERN EFFECT) */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          FitTrack Pro 💪
        </h1>

        <p className="text-lg md:text-xl mb-6 text-white/90">
          Track workouts, monitor calories, smash goals — all in one powerful fitness platform.
        </p>

        <div className="space-x-4 mb-8">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="border border-white px-6 py-2 rounded-full hover:bg-white/20 transition"
          >
            Register
          </button>
        </div>

        {/* FEATURES */}
        <div className="grid gap-3 text-sm md:text-base text-white/90">
          <p>🏋️ Smart Workout Tracking</p>
          <p>🍎 Calorie Monitoring</p>
          <p>🎯 Personal Goals</p>
          <p>📊 Live Progress Insights</p>
        </div>

      </div>
    </div>
  );
}