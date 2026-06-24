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
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
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
