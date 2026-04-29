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
    setList(data.items);
  };

  const addCalories = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/calories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        food_name: food,
        calories: Number(calories),
        meal_type: "meal"
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
    <div className="p-6 text-white">
      <h2 className="text-2xl mb-4">Calories Tracker</h2>

      <input
        placeholder="Food name"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        className="p-2 m-2 text-black"
      />

      <input
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        className="p-2 m-2 text-black"
      />

      <button onClick={addCalories} className="bg-blue-500 p-2">
        Add
      </button>

      <h3 className="mt-4">Total Entries</h3>

      {list.map((item, i) => (
        <div key={i} className="border p-2 mt-2">
          {item.food_name} - {item.calories} kcal
        </div>
      ))}
    </div>
  );
}