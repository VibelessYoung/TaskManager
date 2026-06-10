"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [time, setTime] = useState(25 * 60);

  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const addTime = () => {
    setTime((prev) => prev + 5 * 60);
  };

  const minusTime = () => {
    setTime((prev) => Math.max(5 * 60, prev - 5 * 60));
  };

  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(25 * 60);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-900 text-white gap-6">
      <h1 className="text-6xl font-bold">{formatTime(time)}</h1>

      <div className="flex gap-4">
        <button onClick={minusTime} className="px-4 py-2 bg-red-600 rounded">
          -5 min
        </button>

        <button onClick={addTime} className="px-4 py-2 bg-green-600 rounded">
          +5 min
        </button>
      </div>

      <div className="flex gap-4">
        <button onClick={startTimer} className="px-6 py-2 bg-blue-600 rounded">
          Start
        </button>

        <button
          onClick={pauseTimer}
          className="px-6 py-2 bg-yellow-500 rounded"
        >
          Pause
        </button>

        <button onClick={resetTimer} className="px-6 py-2 bg-gray-500 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
