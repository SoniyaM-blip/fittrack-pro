import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Workouts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/workouts`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const waysToTrain = [
    { title: "Cardio", desc: "Treadmills, bikes, rowing machines." },
    { title: "Strength", desc: "Free weights and machines." },
    { title: "Functional", desc: "Kettlebells and movement training." },
    { title: "Cycle Studio", desc: "High-energy cycling workouts." },
    { title: "Group Exercise", desc: "Motivating group classes." },
    { title: "Personal Training", desc: "1-on-1 coaching." },
  ];

  const COLORS = [
    "#7c3aed",
    "#ec4899",
    "#f97316",
    "#06b6d4",
    "#22c55e",
    "#eab308",
  ];

  // ✅ FIX: Capitalize labels
  const chartData = data
    ? Object.entries(data).map(([key, value]) => ({
        name: key.charAt(0).toUpperCase() + key.slice(1),
        value,
      }))
    : [];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-700/60 to-orange-500/50" />

      <div className="relative z-10 px-8 pt-24 max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">WAYS TO TRAIN</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {waysToTrain.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-6">YOUR ACTIVITY STATS</h1>

        {!data ? (
          <p>Loading stats...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">

            {/* PIE CHART */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h2 className="mb-4 font-semibold">Workout Split</h2>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={110}
                    label
                  >
                    {chartData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* BAR CHART */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h2 className="mb-4 font-semibold">Workout Count</h2>

              <ResponsiveContainer width="100%" height={300}>
                {/* ✅ FIX: spacing added */}
                <BarChart data={chartData} barCategoryGap="20%">
                  <CartesianGrid stroke="rgba(255,255,255,0.1)" />

                  {/* ✅ FIX: rotated labels */}
                  <XAxis
                    dataKey="name"
                    stroke="#ffffff"
                    tick={{ fill: "#fff", fontSize: 12 }}
                    angle={-20}
                    textAnchor="end"
                  />

                  <YAxis stroke="#ffffff" tick={{ fill: "#fff" }} />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "none",
                      borderRadius: "10px",
                    }}
                  />

                  {/* ✅ FIX: ensure small bars visible */}
                  <Bar dataKey="value" minPointSize={5}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>

                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}