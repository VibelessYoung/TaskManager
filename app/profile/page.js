"use client";
import React, { useState } from "react";

function Page() {
  const [name, SetName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [pass, SetPass] = useState("");
  const SaveProfile = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("pass", pass);
  };
  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div
        className="
          w-full
          max-w-3xl
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8 md:p-10
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white">
            Set Up Your Profile
          </h1>

          <p className="text-gray-400 mt-3">
            Personalize your account and get started.
          </p>
        </div>

        <form className="space-y-6">
          {/* Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">First Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                placeholder="John"
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  px-4 py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                  focus:ring-4
                  focus:ring-cyan-500/20
                  transition-all
                "
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Last Name</label>

              <input
                type="text"
                value={lastName}
                onChange={(e) => SetLastName(e.target.value)}
                placeholder="Doe"
                className="
                  w-full
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  px-4 py-3
                  text-white
                  outline-none
                  focus:border-cyan-500
                  focus:ring-4
                  focus:ring-cyan-500/20
                  transition-all
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>

            <input
              type="password"
              value={pass}
              onChange={(e) => SetPass(e.target.value)}
              placeholder="••••••••"
              className="
                w-full
                rounded-2xl
                bg-white/5
                border border-white/10
                px-4 py-3
                text-white
                outline-none
                focus:border-cyan-500
                focus:ring-4
                focus:ring-cyan-500/20
                transition-all
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            onClick={SaveProfile}
            className="
              w-full
              py-4
              rounded-2xl
              font-semibold
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              hover:scale-[1.02]
              transition-all
              duration-300
              shadow-lg
              shadow-cyan-500/20
            "
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
