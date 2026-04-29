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
    {
      title: "Cardio",
      desc: "Treadmills, rowing machines, bikes, stair climbers and ellipticals.",
    },
    {
      title: "Strength",
      desc: "Free weights, machines and Olympic lifting platforms.",
    },
    {
      title: "Functional",
      desc: "Kettlebells, dumbbells and movement-based training.",
    },
    {
      title: "Cycle Studio",
      desc: "High-energy cycling workouts for all levels.",
    },
    {
      title: "Group Exercise",
      desc: "Motivating group classes with instructors.",
    },
    {
      title: "Personal Training",
      desc: "1-on-1 coaching tailored to your goals.",
    },
  ];

  const COLORS = [
    "#ff6b6b",
    "#feca57",
    "#48dbfb",
    "#1dd1a1",
    "#5f27cd",
    "#ff9ff3",
  ];

  const chartData = data
    ? Object.entries(data).map(([key, value]) => ({
        name: key,
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 via-pink-500/60 to-orange-400/50" />

      <div className="relative z-10 px-8 pt-24 max-w-6xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <h1 className="text-3xl font-bold mb-6">WAYS TO TRAIN</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {waysToTrain.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-white/80 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= STATS SECTION ================= */}
        <h1 className="text-3xl font-bold mb-6">YOUR ACTIVITY STATS</h1>

        {!data && <p>Loading stats...</p>}

        {data && (
          <div className="grid md:grid-cols-2 gap-10">

            {/* PIE CHART */}
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
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
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* BAR CHART */}
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
              <h2 className="mb-4 font-semibold">Workout Count</h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#ffffff" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}