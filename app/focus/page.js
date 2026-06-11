"use client";

import { useEffect, useRef, useState } from "react";

export default function Pomodoro() {
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [sessions, setSessions] = useState(0);
  const [baseTime, setBaseTime] = useState(WORK_TIME);

  const intervalRef = useRef(null);

  const start = () => {
    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          switchMode();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsWork(true);
    setSessions(0);
    setTime(WORK_TIME);
  };

  const switchMode = () => {
    clearInterval(intervalRef.current);

    if (isWork) {
      setSessions((prev) => prev + 1);
      setIsWork(false);
      setBaseTime(BREAK_TIME);
      setTime(BREAK_TIME);
    } else {
      setIsWork(true);
      setBaseTime(WORK_TIME);
      setTime(WORK_TIME);
    }

    setIsRunning(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const format = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const totalTime = isWork ? WORK_TIME : BREAK_TIME;
  const progress = ((baseTime - time) / baseTime) * 100;

  const minusTime = () => {
    setTime((prev) => {
      const newTime = Math.max(5 * 60, prev - 5 * 60);
      setBaseTime(newTime);
      return newTime;
    });
  };

  const addTime = () => {
    setTime((prev) => {
      const newTime = prev + 5 * 60;
      setBaseTime(newTime);
      return newTime;
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-gray-950 to-black text-white gap-10 p-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-sm tracking-widest text-cyan-400 uppercase">
          {isWork ? "🔥 Focus Session" : "☕ Break Session"}
        </h2>

        <p className="text-3xl font-black mt-2">Stay in the zone</p>
      </div>

      {/* Card */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-10 shadow-2xl flex flex-col items-center gap-6">
        {/* Circle */}
        <div className="relative w-56 h-56">
          <svg className="w-full h-full">
            {/* Background Circle */}
            <circle
              cx="50%"
              cy="50%"
              r="90"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
              fill="none"
            />

            {/* Progress */}
            <circle
              cx="50%"
              cy="50%"
              r="90"
              stroke="url(#gradient)"
              strokeWidth="10"
              fill="none"
              strokeDasharray={565}
              strokeDashoffset={565 - (565 * progress) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Time */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-black tracking-wider">
              {format(time)}
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="text-sm text-gray-400">
          Sessions completed:{" "}
          <span className="text-cyan-400 font-semibold">{sessions}</span>
        </div>

        {/* Main Controls */}
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={start}
            className="px-6 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Start
          </button>

          <button
            onClick={pause}
            className="px-6 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300"
          >
            Pause
          </button>

          <button
            onClick={reset}
            className="px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300"
          >
            Reset
          </button>
        </div>

        {/* Time Controls */}
        <div className="flex gap-3">
          <button
            onClick={minusTime}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
          >
            -5 min
          </button>

          <button
            onClick={addTime}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all"
          >
            +5 min
          </button>
        </div>
      </div>
    </div>
  );
}
