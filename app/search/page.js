"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase()) ||
      task.status.toLowerCase().includes(search.toLowerCase()) ||
      task.date.toLowerCase().includes(search.toLowerCase()),
  );
  const statusColors = {
    Todo: "bg-red-500/20 text-red-400 border-red-500/20",

    "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",

    Completed: "bg-green-500/20 text-green-400 border-green-500/20",
  };
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-black text-white">Search Tasks</h1>

          <p className="text-gray-400 mt-3">
            Quickly find tasks, notes and schedules.
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-12">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-5
                h-5
                text-gray-400
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="search"
              placeholder="Search tasks..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-2xl
                bg-white/5
                border
                border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-cyan-500
                focus:ring-4
                focus:ring-cyan-500/20
                transition-all
              "
            />
          </div>
          <p className="text-gray-400 mt-6 w-full text-center">
            Found {filteredTasks.length} task(s)
          </p>
        </div>
        <div className="p-8 flex flex-wrap gap-6">
          {filteredTasks.map((task) => {
            return (
              <div
                key={task.id}
                className="
          
          w-full
          sm:w-[320px]
          rounded-3xl
          border border-white/10
          bg-gradient-to-b
          from-slate-900
          to-slate-950
          p-5
          shadow-xl
          hover:shadow-cyan-500/10
          hover:-translate-y-1
          transition-all
          duration-300
        "
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {task.title}
                    </h2>

                    <p className="text-sm text-gray-400 mt-1">{task.date}</p>
                  </div>

                  <span
                    className={`
                px-3 py-1
                text-xs
                font-semibold
                rounded-full
                border
                ${statusColors[task.status]}
              `}
                  >
                    {task.status}
                  </span>
                </div>

                {/* Description */}
                <div
                  className="
            mt-5
            rounded-2xl
            bg-white/5
            border
            border-white/5
            p-4
          "
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Footer */}
                {/* <div className="flex justify-between items-center mt-5">
                  <span className="text-xs text-gray-500">Created 2h ago</span>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {search && filteredTasks.length === 0 && (
          <div
            className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-12
            text-center
          "
          >
            <div className="text-6xl mb-4">🔍</div>

            <h2 className="text-white text-2xl font-bold">No Task Found</h2>

            <p className="text-gray-400 mt-3">
              Search by title, description, date or status.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
