import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🚀 redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("firstName", data.first_name);

        // 🔥 update navbar instantly
        window.dispatchEvent(new Event("userLogin"));

        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-animation"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-96 text-white border border-white/20"
      >
        {/* LOGO + TAGLINE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">💪 FitTrack Pro</h1>
          <p className="text-sm text-white/70">Train smarter. Track better.</p>
        </div>

        <input
          className="w-full p-2 mb-4 rounded bg-white/20 outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 rounded bg-white/20 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}