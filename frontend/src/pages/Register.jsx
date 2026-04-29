import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthBackground from "../components/AuthBackground";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
            first_name: firstName,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <AuthBackground>
      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-96 text-white border border-white/20"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-white/70 text-sm">Join FitTrack Pro</p>
        </div>

        <input
          className="w-full p-2 mb-4 rounded bg-white/20 outline-none"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

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

        <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded">
          Register
        </button>
      </form>
    </AuthBackground>
  );
}