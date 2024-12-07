import React from "react";
import ProjectCards from "../Components/projectCards";

const Projectsec = () => {
  return (
    <>
      <div className="flex flex-row mt-28">
        <div className="flex-1">
          <p className="font-kanit font-semibold text-[120px] text-[#949494] rotate-[270deg] mt-96 ml-[-290px] tracking-wider text-nowrap mr-0">
            02-PROJECTS
          </p>
        </div>
        <div className="flex-[4] flex-wrap flex-row flex ml-[-240px]">
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

      <button className="border mt-16 ml-[49vw] px-6 pt-3 pb-3 text-[13px] mb-10">
        EXPLORE OTHER PROJECTS
      </button>
    </>
  );
};

export default Projectsec;
