import { useState, useEffect } from "react";

export default function Goals() {
  const [goalType, setGoalType] = useState("");
  const [target, setTarget] = useState("");
  const [goals, setGoals] = useState([]);

  const userId = 1;

  const fetchGoals = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/goals/${userId}`
    );
    const data = await res.json();
    setGoals(data || []);
  };

  const addGoal = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/goals`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        goal_type: goalType,
        target_value: Number(target),
      }),
    });

    setGoalType("");
    setTarget("");
    fetchGoals();
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white p-6 pt-24">

      <h2 className="text-3xl font-bold mb-6">Fitness Goals 🎯</h2>

      {/* INPUT */}
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-6">
        <input
          placeholder="Goal type"
          value={goalType}
          onChange={(e) => setGoalType(e.target.value)}
          className="p-2 m-2 text-black rounded"
        />

        <input
          placeholder="Target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="p-2 m-2 text-black rounded"
        />

        <button
          onClick={addGoal}
          className="bg-blue-500 px-4 py-2 rounded ml-2"
        >
          Add Goal
        </button>
      </div>

      {/* LIST */}
      <div>
        {goals.map((goal, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl mt-3"
          >
            <p className="font-semibold">{goal.goal_type}</p>
            <p>Target: {goal.target_value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}