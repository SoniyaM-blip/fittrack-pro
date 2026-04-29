import { useState, useEffect } from "react";

export default function Calories() {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");
  const [list, setList] = useState([]);

  const userId = 1;

  const fetchCalories = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/calories/${userId}`
    );
    const data = await res.json();
    setList(data.items || []);
  };

  const addCalories = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/calories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        food_name: food,
        calories: Number(calories),
        meal_type: "meal",
      }),
    });

    setFood("");
    setCalories("");
    fetchCalories();
  };

  useEffect(() => {
    fetchCalories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white p-6 pt-24">

      <h2 className="text-3xl font-bold mb-6">Calories Tracker 🍎</h2>

      {/* INPUT SECTION */}
      <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 mb-6">
        <input
          placeholder="Food name"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="p-2 m-2 text-black rounded"
        />

        <input
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="p-2 m-2 text-black rounded"
        />

        <button
          onClick={addCalories}
          className="bg-green-500 px-4 py-2 rounded ml-2"
        >
          Add
        </button>
      </div>

      {/* LIST */}
      <div>
        {list.map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl mt-3"
          >
            <p className="font-semibold">{item.food_name}</p>
            <p>{item.calories} kcal</p>
            <p className="text-sm text-white/60">{item.meal_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}