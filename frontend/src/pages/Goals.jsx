import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Goals() {
  const [goalType, setGoalType] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [goals, setGoals] = useState([]);

  const userId = 1; // replace later with real auth

  const API = import.meta.env.VITE_API_URL;

  const fetchGoals = () => {
    fetch(`${API}/api/goals/${userId}`)
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoal = () => {
    fetch(`${API}/api/goals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        goal_type: goalType,
        target_value: targetValue,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setGoalType("");
        setTargetValue("");
        fetchGoals();
      });
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-purple-700 via-pink-600 to-orange-400">

      <Navbar />

      <div className="pt-24 px-6 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Fitness Goals
        </h1>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl mb-10">

          <input
            className="w-full p-3 mb-3 rounded text-black"
            placeholder="Goal type (e.g. weight loss, cardio)"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
          />

          <input
            className="w-full p-3 mb-3 rounded text-black"
            placeholder="Target (e.g. 5 kg, 30 mins/day)"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
          />

          <button
            onClick={addGoal}
            className="bg-white text-black px-5 py-2 rounded hover:bg-gray-200"
          >
            Add Goal
          </button>

        </div>

        {/* GOALS LIST */}
        <div className="grid gap-4">

          {goals.length === 0 && (
            <p className="text-white/70">No goals yet</p>
          )}

          {goals.map((g) => (
            <div
              key={g.id}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl"
            >
              <h2 className="text-xl font-semibold capitalize">
                {g.goal_type}
              </h2>

              <p className="text-white/80">
                Target: {g.target_value}
              </p>

              <p className="text-xs text-white/50 mt-2">
                {g.created_at}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}