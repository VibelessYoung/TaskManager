import React from "react";

function Page() {
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
        </div>

        {/* Empty State */}
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

          <h2 className="text-white text-2xl font-bold">Start Searching</h2>

          <p className="text-gray-400 mt-3">
            Search by title, description, category or status.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
