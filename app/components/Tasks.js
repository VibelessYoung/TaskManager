"use client";
import React, { useEffect, useState } from "react";

function Tasks() {
  const statusColors = {
    Todo: "bg-red-500/20 text-red-400 border-red-500/20",

    "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",

    Completed: "bg-green-500/20 text-green-400 border-green-500/20",
  };
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storesTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(storesTasks);
    setTasks(storesTasks);
  }, []);
  const deleteTask = (id) => {
    const confirm = window.confirm("are you sure?");
    if (!confirm) return;
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };
  return (
    <div className="p-8 flex flex-wrap gap-6 w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className="
          h-72
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
                <h2 className="text-xl font-bold text-white">{task.title}</h2>

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
            <div className="flex justify-between items-center mt-5">
              <span className="text-xs text-gray-500">Created 2h ago</span>

              <div className="flex gap-2">
                {/* Complete */}
                <button
                  className="
                p-2.5
                rounded-xl
                bg-green-500/10
                text-green-400
                hover:bg-green-500
                hover:text-white
                transition-all
              "
                >
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
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>

                {/* Edit */}
                <button
                  className="
                p-2.5
                rounded-xl
                bg-yellow-500/10
                text-yellow-400
                hover:bg-yellow-500
                hover:text-white
                transition-all
              "
                >
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
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="
                p-2.5
                rounded-xl
                bg-red-500/10
                text-red-400
                hover:bg-red-500
                hover:text-white
                transition-all
              "
                >
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
