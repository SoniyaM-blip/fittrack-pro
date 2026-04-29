export default function Footer() {
  return (
    <div className="w-full mt-auto">

      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white/70 text-center py-6">

        <p className="text-sm">
          © {new Date().getFullYear()} FitTrack Pro. All rights reserved.
        </p>

        <p className="text-xs text-white/40 mt-1">
          Built for your fitness journey 🚀
        </p>

      </div>

    </div>
  );
}