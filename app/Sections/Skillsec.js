import React from "react";

const Skillsec = () => {
  return (
    <>
      <div className="mt-0">
        <div className="mt-20 mb-5 h-5 w-56 bg-slate-200 ml-auto"></div>
        <div>
          <p className="hidden sm:block font-kanit font-semibold text-[55px] ml-[100px] my-[100px]">
            03 - Skills and Experience
          </p>
          <p className="flex-1 text-xl text-nowrap font-kanit text-[40px] mt-20 mr-0 font-semibold ml-10 sm:hidden">
            03 - Skills and Experience
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row relative">
        <div className="flex-1 flex flex-row mt-16 sm:mt-0">
          <div className="w-[1px] h-[700px] ml-10 sm:ml-[150px] relative bg-white"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[20px] ml-8 sm:ml-[140px]"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[380px] ml-8 sm:ml-[140px]"></div>
          <div>
            <p className="mt-[12px] ml-[40px] text-[25px] font-kanit">
              Programming Languages
            </p>
            <p className="text-[#191919] text-[20vw] font-kanit relative ml-[-45px] mt-[-100px] p-0 z-[-1] sm:block">
              Skills
            </p>
            <p className="mt-[320px] ml-[40px] text-[25px] font-kanit">
              Frameworks / Libraries
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-row mt-20 sm:mt-0">
          <div className="w-[1px] h-[700px] ml-10 sm:ml-[150px] relative bg-white"></div>
          <div className="rounded-[50%] h-[20px] w-[20px] bg-white absolute mt-[20px] ml-8 sm:ml-[140px]"></div>
          <div>
            <p className="mt-[12px] ml-[40px] text-[25px] font-kanit">
              Social Summer of Code
            </p>
            <p className="text-[#191919] text-[20vw] font-kanit relative ml-[-45px] mt-[-100px] p-0 z-[-1] sm:block">
              Experience
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#191919] text-[20vw] font-kanit relative sm:mt-[-750px] p-0 z-[-1] hidden sm:block">
        Skills
      </p>
      <p className="text-[#191919] text-[20vw] font-kanit relative mt-[-100px] p-0 z-[-1] hidden sm:block">
        Experience
      </p>
    </>
  );
};

export default Skillsec;
