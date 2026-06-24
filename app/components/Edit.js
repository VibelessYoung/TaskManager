"use client";
import React, { useState } from "react";

function Edit({ task, onClose, setTasks }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);
  const saveTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("task", task);
    console.log("task id", task.id);
    console.log("tasks", tasks);
    const updatedTasks = tasks.map((item) => {
      if (item.id == task.id) {
        return {
          ...item,

          title,

          description,

          date,

          status,
        };
      }

      return item;
    });

    localStorage.setItem("Tasks", JSON.stringify(updatedTasks));

    setTasks(updatedTasks);

    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-lg bg-gray-900 rounded-3xl border border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Edit Task</h2>

        <form className="flex flex-col gap-4">
          <div>
            <label className="text-gray-300 block mb-2">Title</label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full
                bg-gray-800
                border
                border-gray-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-indigo-500
              "
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Description</label>

            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
                w-full
                bg-gray-800
                border
                border-gray-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-indigo-500
              "
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Date</label>

            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full
                bg-gray-800
                border
                border-gray-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-indigo-500
              "
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Status</label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                w-full
                bg-gray-800
                border
                border-gray-700
                rounded-xl
                p-3
                text-white
                outline-none
                focus:border-indigo-500
              "
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={saveTask}
              className="
                flex-1
                bg-indigo-600
                hover:bg-indigo-500
                text-white
                rounded-xl
                p-3
                font-semiboldtext-white
                transition
              "
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="
                flex-1
                bg-gray-700
                hover:bg-gray-600
                rounded-xl
                p-3
                font-semibold
                text-white
                transition
              "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
