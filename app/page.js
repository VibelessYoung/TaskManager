"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const profile = localStorage.getItem("user");
    if (profile) {
      const data = JSON.parse(profile);
      setUserName(data.name);
    }
  }, []);
  return (
    <main className="w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/20 blur-[120px]" />

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl text-center max-w-3xl w-full">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
          <div className="flex gap-1.5 items-center justify-center">
            Welcome{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 18.75 7.5-7.5 7.5 7.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            </div>
          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6">
            HELLO
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              {userName ? `${userName}` : "USER"}
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Organize your tasks, stay focused, and boost your productivity with
            a clean and modern workspace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href={"/profile"}>
              <button className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
                Get Started
              </button>
            </Link>
            <Link href={"tasks"}>
              <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300">
                My Tasks
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
