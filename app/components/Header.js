import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/95 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-6 h-6 text-cyan-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              />
            </svg>
          </div>

          <div>
            <h1 className="font-bold text-xl md:text-2xl text-white">
              Manage Tasks
            </h1>
            <p className="text-xs text-gray-400">Stay organized & productive</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-all duration-300">
            Dashboard
          </button>

          <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30">
            New Task
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
