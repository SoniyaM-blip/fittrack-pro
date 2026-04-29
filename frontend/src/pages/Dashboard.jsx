import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState({
    cardio: 0,
    strength: 0,
    yoga: 0,
    hiit: 0,
    pilates: 0,
    stretching: 0,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/workouts")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  const chartData = [
    { name: "Cardio", value: data.cardio },
    { name: "Strength", value: data.strength },
    { name: "Yoga", value: data.yoga },
    { name: "HIIT", value: data.hiit },
    { name: "Pilates", value: data.pilates },
    { name: "Stretching", value: data.stretching },
  ];

  const colors = [
    "#a5b4fc",
    "#a5b4fc",
    "#a5b4fc",
    "#a5b4fc",
    "#a5b4fc",
    "#a5b4fc",
  ];

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      <Navbar />

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-purple-900/60 to-slate-800/70" />

      {/* CONTENT */}
      <div className="relative z-10 pt-24 px-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
          <p className="text-white/70 text-sm">
            Workout analytics at a glance
          </p>
        </div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          {chartData.map(item => (
            <div
              key={item.name}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10"
            >
              <p className="text-white/60 text-sm">{item.name}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
          ))}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-5 gap-6">

          {/* BAR CHART (WIDE LEFT) */}
          <div className="col-span-3 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">

            <h2 className="mb-4 text-sm text-white/70">
              Workout Comparison
            </h2>

            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Bar dataKey="value" fill="#a5b4fc" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* PIE CHART (RIGHT) */}
          <div className="col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">

            <h2 className="mb-4 text-sm text-white/70">
              Workout Split
            </h2>

 <ResponsiveContainer width="100%" height={260}>
  <PieChart>

    <defs>
      <linearGradient id="gradCardio" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#ff8e8e" />
      </linearGradient>

      <linearGradient id="gradStrength" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4dabf7" />
        <stop offset="100%" stopColor="#74c0fc" />
      </linearGradient>

      <linearGradient id="gradYoga" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#51cf66" />
        <stop offset="100%" stopColor="#8ce99a" />
      </linearGradient>

      <linearGradient id="gradHiit" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffd43b" />
        <stop offset="100%" stopColor="#ffe066" />
      </linearGradient>

      <linearGradient id="gradPilates" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#845ef7" />
        <stop offset="100%" stopColor="#b197fc" />
      </linearGradient>

      <linearGradient id="gradStretch" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ff922b" />
        <stop offset="100%" stopColor="#ffc078" />
      </linearGradient>
    </defs>

    <Pie
      data={chartData}
      dataKey="value"
      nameKey="name"
      outerRadius={90}
      labelLine={true}
      label={({ cx, cy, midAngle, outerRadius, name }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 15;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
          <text
            x={x}
            y={y}
            fill="white"
            fontSize={12}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
          >
            {name}
          </text>
        );
      }}
    >
      <Cell fill="url(#gradCardio)" />
      <Cell fill="url(#gradStrength)" />
      <Cell fill="url(#gradYoga)" />
      <Cell fill="url(#gradHiit)" />
      <Cell fill="url(#gradPilates)" />
      <Cell fill="url(#gradStretch)" />
    </Pie>

    <Tooltip />

  </PieChart>
</ResponsiveContainer>

          </div>

        </div>

      </div>
    </div>
  );
}