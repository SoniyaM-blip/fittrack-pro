import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col justify-center items-center text-center px-6">

      {/* 🌈 LIGHT ANIMATED GRADIENT */}
      <div className="absolute inset-0 bg-gradient-animation opacity-50"></div>

      {/* 🧘‍♀️ MODERN YOGA IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=2000&q=80')",
        }}
      ></div>

      {/* ✨ SOFT LIGHT OVERLAY (NOT DARK) */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* ✨ GLOW EFFECTS */}
      <div className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          FitTrack Pro 💪
        </h1>

        <p className="text-lg md:text-xl mb-6 text-white/90">
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