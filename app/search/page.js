import React from "react";

function page() {
  return (
    <div className="flex flex-col bg-gray-900 w-full items-center p-5">
      <h1 className="text-3xl text-white font-bold">Search</h1>
      <input
        type="search"
        className="border-2 border-white rounded-sm mt-10 w-2xl p-1.5 text-white"
      />
    </div>
  );
}

export default page;
