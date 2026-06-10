import React from "react";

function page() {
  return (
    <div className="w-full bg-gray-900 flex flex-col p-24 gap-10">
      <button className="bg-red-600 text-white p-2.5 rounded-2xl">DELETE USER INFORMATION</button>
      <button className="bg-red-600 text-white p-2.5 rounded-2xl">DELETE TASKS</button>
    </div>
  );
}

export default page;
