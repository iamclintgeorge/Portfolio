import React from "react";

const Aboutsec = () => {
  return (
    <>
      <div className="mt-0">
        <p className="relative text-[22.5vw] font-kanit text-[#191919]">
          About Me
        </p>
        <div className="absolute flex flex-row mt-[-190px]">
          <div className="flex-1 text-xl ml-28 font-kanit text-[40px] mr-0 font-semibold">
            <p>01-Introduction</p>
          </div>
          <div className="flex-[1.5] mr-24 text-[20px] font-kanit text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 h-5 w-56 bg-slate-200"></div>
    </>
  );
};

export default Aboutsec;
