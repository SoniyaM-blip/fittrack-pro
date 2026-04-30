import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col justify-center items-center text-center px-6">

      {/* 🌈 SOFT ANIMATED GRADIENT (VERY LIGHT) */}
      <div className="absolute inset-0 bg-gradient-animation opacity-40"></div>

      {/* 🧘‍♀️ MODERN YOGA IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* 🔥 CONTROLLED DARK OVERLAY (FIX READABILITY) */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* ✨ SOFT GLOW ELEMENTS */}
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-25 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-25 bottom-10 right-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          FitTrack Pro 💪
        </h1>

        <p className="text-lg md:text-xl mb-6 text-white/95 drop-shadow-md">
          Track workouts, monitor calories, and achieve your fitness goals — all in one place.
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
        <div className="grid gap-3 text-sm md:text-base text-white/95">
          <p>🏋️ Smart Workout Tracking</p>
          <p>🍎 Calorie Monitoring</p>
          <p>🎯 Personal Goals</p>
          <p>📊 Live Progress Insights</p>
        </div>

      </div>
    </div>
  );
}