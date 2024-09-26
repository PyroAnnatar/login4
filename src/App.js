import React from "react";

const App = () => {
  return (
    <div className="bg-[#02004FED] h-screen relative">
      <div className="h-screen bg-[#333A7E42] w-full memeagon absolute"></div>
      <div className="h-screen bg-[#333A7E42] w-full memeagon absolute right-0 rotate-180 -scale-y-100 "></div>
      <div className="text-[#FFFFFF80] z-10 w-[400px] absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]">
        <h1 className="text-7xl uppercase font-bold mb-8">Login</h1>
        <div className="flex flex-col gap-8">
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-8 text-2xl text-white bg-[#1A216280] border-[1px] border-[#FFFFFF1A]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-8 text-2xl text-white bg-[#1A216280] border-[1px] border-[#FFFFFF1A]"
          />
          <button className="border-[1px] border-[#FFFFFF50] text-white py-2 px-4 text-2xl font-bold w-1/2 bg-[#050D5E] hover:bg-[#08127c] duration-500">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
