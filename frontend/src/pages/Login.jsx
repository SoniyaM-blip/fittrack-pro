import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("firstName", data.first_name);

      navigate("/");

    } catch (err) {
      setError("Server not reachable");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* 🏋️ BACKGROUND IMAGE (GYM ENERGY) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* DARK FITNESS OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-pink-600/40" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

        {/* 🧠 BIG CENTER LOGO */}
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight text-center drop-shadow-lg">
          FitTrack Pro
        </h1>

        <p className="text-white/70 mt-2 mb-10 text-center">
          Your fitness journey starts here
        </p>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 text-white"
        >

          <h2 className="text-2xl font-semibold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/20 mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/20 mb-4 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-200 text-sm text-center mb-3">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full py-3 bg-white text-purple-600 rounded-full font-medium hover:scale-105 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* REGISTER LINK */}
          <p
            onClick={() => navigate("/register")}
            className="text-center mt-5 text-white/80 text-sm cursor-pointer hover:underline"
          >
            Don’t have an account? Create one
          </p>

        </form>

      </div>
    </div>
  );
}