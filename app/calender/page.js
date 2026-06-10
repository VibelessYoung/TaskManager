"use client";

import { useState } from "react";

export default function Page() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDay = new Date(year, month, 1).getDay();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    cells.push(day);
  }

  return (
    <div className="w-full bg-gray-950 text-white flex justify-center items-center p-6">
      <div className="w-full max-w-4xl rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl p-6">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevMonth}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
          >
            ←
          </button>

          <h1 className="text-3xl font-bold">
            {months[month]} {year}
          </h1>

          <button
            onClick={nextMonth}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-3 mb-3">
          {days.map((day) => (
            <div key={day} className="text-center text-gray-400 font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-3">
          {cells.map((day, index) => {
            const isToday =
              day &&
              today.getDate() === day &&
              today.getMonth() === month &&
              today.getFullYear() === year;

            const isSelected = selectedDay === day;

            return (
              <button
                key={index}
                onClick={() => day && setSelectedDay(day)}
                className={`
                  aspect-square rounded-2xl
                  flex items-center justify-center
                  transition-all duration-200
                  text-lg
                  
                  ${day === null ? "invisible" : "hover:bg-indigo-600"}

                  ${isToday ? "border-2 border-indigo-500" : ""}

                  ${isSelected ? "bg-indigo-600 scale-105" : "bg-gray-800"}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>

        {selectedDay && (
          <div className="mt-8 p-4 rounded-2xl bg-gray-800">
            <h2 className="text-xl font-bold">Selected Date</h2>

            <p className="text-gray-300 mt-2">
              {selectedDay} {months[month]} {year}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
