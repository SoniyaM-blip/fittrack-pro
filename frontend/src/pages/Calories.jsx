import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Calories() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/calories`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-animation"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-8 pt-24 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">🍎 Calorie Tracker</h1>

        {entries.length === 0 ? (
          <p>No calorie data yet</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {entries.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {item.food_name}
                </h2>

                <p className="text-white/80">
                  Calories: {item.calories}
                </p>

                <p className="text-xs text-white/60 mt-2">
                  Date: {item.created_at}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}