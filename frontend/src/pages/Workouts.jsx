import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Workouts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/workouts")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen relative text-white">

      <Navbar />

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-rose-400/60 to-orange-300/60" />

      {/* CONTENT (IMPORTANT FIXES HERE) */}
      <div className="relative z-10 pt-24 px-10">

        <h1 className="text-3xl font-semibold mb-8">
          Workouts
        </h1>

        {!data && <p>Loading...</p>}

        {data && (
          <div className="grid md:grid-cols-3 gap-6">

            {Object.entries(data).map(([type, value]) => (
              <div
                key={type}
                className="bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:scale-105 transition"
              >
                <p className="capitalize text-white/80">
                  {type}
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  {value}
                </h2>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}