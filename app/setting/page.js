"use client";
import React from "react";

function Page() {
  const deleteProfile = () => {
    localStorage.removeItem("user");
  };
  const deleteAll = () => {
    localStorage.clear();
  };
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Settings</h1>

        <p className="text-gray-400 mt-2">
          Manage your account and application data.
        </p>

        <div className="mt-10 space-y-6">
          {/* Delete Tasks */}
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Delete All Tasks
                </h2>

                <p className="text-gray-400 mt-2">
                  Permanently remove all tasks from your account. This action
                  cannot be undone.
                </p>
              </div>

              <button
                className="
                  px-5 py-3
                  rounded-2xl
                  bg-red-600
                  text-white
                  font-semibold
                  hover:bg-red-500
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Delete Tasks
              </button>
            </div>
          </div>

          {/* Delete Account */}
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Delete Account
                </h2>

                <p className="text-gray-400 mt-2">
                  Delete your account and all associated data. This action is
                  permanent.
                </p>
              </div>

              <button
                onClick={deleteProfile}
                className="
                  px-5 py-3
                  rounded-2xl
                  bg-red-600
                  text-white
                  font-semibold
                  hover:bg-red-500
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Delete Account
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Delete All Data
                </h2>

                <p className="text-gray-400 mt-2">
                  Delete your all data in this app.
                </p>
              </div>

              <button
                onClick={deleteAll}
                className="
                  px-5 py-3
                  rounded-2xl
                  bg-red-600
                  text-white
                  font-semibold
                  hover:bg-red-500
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Delete All Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
