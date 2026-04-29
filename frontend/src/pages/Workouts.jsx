import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Workouts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/workouts`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const workouts = [
    {
      title: "Cardio",
      desc: "Treadmills, rowing machines, bikes, stair climbers and ellipticals.",
      key: "cardio",
    },
    {
      title: "Strength",
      desc: "Free weights, Olympic lifting platforms and machines.",
      key: "strength",
    },
    {
      title: "Functional",
      desc: "Kettlebells, dumbbells and movement training.",
      key: "functional",
    },
    {
      title: "Cycle Studio",
      desc: "High-energy bike workouts for all fitness levels.",
      key: "hiit",
    },
    {
      title: "Group Exercise",
      desc: "Motivating group-based training sessions.",
      key: "yoga",
    },
    {
      title: "Personal Training",
      desc: "Tailored 1-on-1 coaching.",
      key: "pilates",
    },
  ];

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

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/60 to-orange-400/50" />

      {/* CONTENT */}
      <div className="relative z-10 px-8 pt-24 max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          WAYS TO TRAIN
        </h1>

        <p className="text-white/80 mb-10">
          Discover different ways to stay active and build your fitness
        </p>

        {!data && <p>Loading...</p>}

        <div className="grid md:grid-cols-3 gap-6">
          {workouts.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:scale-105 transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-white/80 text-sm mb-4">
                {item.desc}
              </p>

              {data && (
                <div className="text-3xl font-bold">
                  {data[item.key] || 0}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full text-center text-white/70 text-xs p-4">
        © {new Date().getFullYear()} FitTrack Pro
      </div>

    </div>
  );
}