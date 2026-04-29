import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthBackground from "../components/AuthBackground";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
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

        window.dispatchEvent(new Event("userLogin"));

        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <AuthBackground>

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-96 text-white border border-white/20"
      >

        {/* LOGO + TAGLINE */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">💪 FitTrack Pro</h1>
          <p className="text-white/70 text-sm">
            Train smarter. Track stronger. Live better.
          </p>
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

    </AuthBackground>
  );
}