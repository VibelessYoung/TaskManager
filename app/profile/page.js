import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center w-full p-5 bg-gray-900">
      <h1 className="text-3xl text-white font-bold">Set-Up Your Profile</h1>
      <form action="" className="flex gap-10 w-full">
        <div className="flex flex-col">
          <p className="text-white">Name</p>
          <input
            type="text"
            className="border-2 border-white rounded-sm p-1.5 text-white"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-white">LastName</p>
          <input
            type="text"
            className="border-2 border-white rounded-sm p-1.5 text-white"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-white">PassWord</p>
          <input
            type="password"
            className="border-2 border-white rounded-sm p-1.5 text-white"
          />
        </div>
        <button className="bg-white rounded-sm px-5 text-black">
            Submit
        </button>
      </form>
    </div>
  );
}

export default page;
