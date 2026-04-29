import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR (optional) */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER (GLOBAL) */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t bg-white/30 backdrop-blur-md">
        © {new Date().getFullYear()} FitTrack Pro. All rights reserved.
      </footer>

    </div>
  );
}