import React from "react";

const Skillsec = () => {
  return (
    <>
      <div className="mt-10">
        <div className="mt-32 mb-14 h-5 w-56 bg-slate-200 ml-auto"></div>
        <div>
          <p className="font-kanit font-semibold text-[55px] ml-[100px] my-[100px]">
            03 - Skills and Experience
          </p>
        </div>
      </div>
      <div className="flex flex-row relative">
        <div className="flex-1 flex flex-row">
          <div className="w-[1px] h-[700px] ml-[150px] relative bg-white"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[20px] ml-[140px]"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[380px] ml-[140px]"></div>
          <div>
            <p className="mt-[12px] ml-[40px] text-[25px] font-kanit">
              Programming Languages
            </p>
            <p className="mt-[320px] ml-[40px] text-[25px] font-kanit">
              Frameworks / Libraries
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-row">
          <div className="w-[1px] h-[700px] ml-[150px] relative bg-white"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[20px] ml-[140px]"></div>
          <div>
            <p className="mt-[12px] ml-[40px] text-[25px] font-kanit">
              Social Summer of Code
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#191919] text-[20vw] font-kanit relative mt-[-750px] p-0 z-[-1]">
        Skills
      </p>
      <p className="text-[#191919] text-[20vw] font-kanit relative mt-[-100px] p-0 z-[-1]">
        Experience
      </p>
    </>
  );
};

export default Skillsec;
