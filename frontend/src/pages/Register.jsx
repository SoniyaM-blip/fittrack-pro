import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully");
        navigate("/");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-orange-400">
      <form
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-96 text-white"
      >
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        <input
          className="w-full p-2 mb-4 rounded bg-white/20 outline-none"
          placeholder="First Name"
          value={first_name}
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

        <button
          type="submit"
          className="w-full bg-black/40 p-2 rounded hover:bg-black/60"
        >
          Register
        </button>
      </form>
    </div>
  );
}