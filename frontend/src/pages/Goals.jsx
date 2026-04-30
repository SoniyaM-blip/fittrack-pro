import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const userId = 1; // ⚠️ replace later with real user system

    fetch(`${import.meta.env.VITE_API_URL}/api/goals/${userId}`)
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-animation"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-8 pt-24 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">🎯 Your Goals</h1>

        {goals.length === 0 ? (
          <p>No goals yet</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {goals.map((g) => (
              <div
                key={g.id}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {g.goal_type}
                </h2>

                <p className="text-white/80">
                  Target: {g.target_value}
                </p>

                <p className="text-xs text-white/60 mt-2">
                  Created: {g.created_at}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}