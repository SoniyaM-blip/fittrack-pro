return (
  <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438')",
    }}
  >
    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* LOGIN CARD */}
    <form
      onSubmit={handleLogin}
      className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-96 text-white border border-white/20"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <input
        className="w-full p-2 mb-4 rounded bg-white/20 outline-none placeholder-white/70"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-2 mb-4 rounded bg-white/20 outline-none placeholder-white/70"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded hover:opacity-90 transition"
      >
        Login
      </button>
    </form>
  </div>
);