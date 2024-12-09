import React from "react";
import ProjectCards from "../Components/projectCards";

const Projectsec = () => {
  return (
    <>
      <div className="flex flex-row mt-20 sm:mt-28">
        <div className="flex-1">
          <p className="hidden font-kanit font-semibold text-[120px] text-[#949494] rotate-[270deg] mt-96 ml-[-290px] tracking-wider text-nowrap mr-0 sm:block">
            02-PROJECTS
          </p>
          <p className="flex-1 text-xl text-nowrap font-kanit text-[40px] mr-0 font-semibold ml-10 sm:hidden">
            02-PROJECTS
          </p>
        </div>
        <div className="flex-[4] flex-wrap flex-row flex ml-[-150px] mt-16 sm:ml-[-240px] sm:mt-0">
          <ProjectCards
            url="/acadsite"
            year="2023-2024"
            title="ACADEMIC CALENDER WITH INTEGRATED CHATBOT"
          />
          <ProjectCards
            url="/fcritproj"
            year="2023-2024"
            title="FCRIT FEE MANAGEMENT SYSTEM"
          />
          <ProjectCards
            url="/fcritproj"
            year="2023-2024"
            title="FCRIT FEE MANAGEMENT SYSTEM"
          />
          <ProjectCards
            url="/acadsite"
            year="2023-2024"
            title="ACADEMIC CALENDER WITH INTEGRATED CHATBOT"
          />
        </div>
      </div>

      <button className="border ml-28 mt-10 sm:ml-[49vw] sm:mt-16 px-6 pt-3 pb-3 text-[13px] mb-10">
        EXPLORE OTHER PROJECTS
      </button>
    </>
  );
};

export default Projectsec;
