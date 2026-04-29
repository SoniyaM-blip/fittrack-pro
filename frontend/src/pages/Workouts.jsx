export default function Workouts() {
  const workouts = [
    {
      title: "Cardio",
      desc: "Add variety with treadmills, rowing machines, bikes, stair climbers and ellipticals.",
    },
    {
      title: "Strength",
      desc: "Full suite of free weights, Olympic lifting platforms and traditional strength equipment.",
    },
    {
      title: "Functional",
      desc: "Train natural movement with kettlebells, dumbbells and medicine balls.",
    },
    {
      title: "Cycle Studio",
      desc: "High-energy bike workouts suitable for all fitness levels.",
    },
    {
      title: "Group Exercise",
      desc: "Stay motivated training with like-minded people in group classes.",
    },
    {
      title: "Personal Training",
      desc: "Get tailored guidance from a qualified personal trainer.",
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/60 to-orange-400/50" />

      {/* CONTENT */}
      <div className="relative z-10 px-8 pt-24 max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-2 tracking-wide">
          WAYS TO TRAIN
        </h1>

        <p className="text-white/80 mb-10">
          Discover different ways to stay active and build your fitness
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {workouts.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="text-white/80 text-sm leading-relaxed">
                {item.desc}
              </p>
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