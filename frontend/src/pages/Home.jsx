import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col justify-center items-center text-center px-6">

      {/* ANIMATED GRADIENT BACKGROUND (OPTIONAL LAYER BEHIND IMAGE) */}
      <div className="absolute inset-0 bg-gradient-animation opacity-40"></div>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl">

        <h1 className="text-5xl font-bold mb-4">
          FitTrack Pro 💪
        </h1>

        <p className="text-lg mb-6">
          Track your workouts, monitor calories, set goals, and transform your fitness journey with real-time insights and progress tracking.
        </p>

        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="border border-white px-6 py-2 rounded-full"
          >
            Register
          </button>
        </div>

        {/* FEATURES */}
        <div className="mt-10 grid gap-4 text-sm opacity-90">
          <p>🏋️ Smart Workout Tracking</p>
          <p>🍎 Calorie Monitoring System</p>
          <p>🎯 Personal Fitness Goals</p>
          <p>📊 Progress Dashboards & Charts</p>
        </div>

      </div>
    </div>
  );
}