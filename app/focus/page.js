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
    <div className="w-full flex flex-col items-center justify-center bg-gray-950 text-white gap-8">
      <h2 className="text-xl opacity-70">
        {isWork ? "🔥 Focus Time" : "☕ Break Time"}
      </h2>

      <div className="relative w-52 h-52">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="90"
            stroke="#2d2d2d"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="50%"
            cy="50%"
            r="90"
            stroke={isWork ? "#22c55e" : "#3b82f6"}
            strokeWidth="10"
            fill="none"
            strokeDasharray={565}
            strokeDashoffset={565 - (565 * progress) / 100}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
          {format(time)}
        </div>
      </div>

      <div className="text-sm opacity-70">Sessions completed: {sessions}</div>

      <div className="flex gap-4">
        <button
          onClick={start}
          className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-500"
        >
          Start
        </button>

        <button
          onClick={pause}
          className="px-5 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-400 text-black"
        >
          Pause
        </button>

        <button
          onClick={reset}
          className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-500"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-4">
        <button onClick={minusTime} className="px-4 py-2 bg-red-600 rounded">
          -5 min
        </button>

        <button onClick={addTime} className="px-4 py-2 bg-green-600 rounded">
          +5 min
        </button>
      </div>
    </div>
  );
}
