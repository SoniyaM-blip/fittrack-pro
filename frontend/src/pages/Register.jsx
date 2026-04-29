import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/login");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-300" />

      {/* FORM */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <form
          onSubmit={handleRegister}
          className="w-full max-w-md bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-8 text-white"
        >

          <h1 className="text-3xl font-semibold text-center mb-6">
            Create Account
          </h1>

          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 rounded-xl bg-white/20 mb-4 outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/20 mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/20 mb-6 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-600 font-medium rounded-full"
          >
            Register
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-center mt-5 text-white/80 text-sm cursor-pointer hover:underline"
          >
            Already have an account? Login
          </p>

        </form>

      </div>
    </div>
  );
}