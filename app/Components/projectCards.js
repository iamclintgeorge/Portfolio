import React from "react";

const ProjectCards = (props) => {
  return (
    <>
      <div className="h-[450px] w-[420px] border m-6">
        <img className="h-[200px] w-[400px] ml-2 mt-2 mb-2" src={props.url} />
        <div className="h-[3px] w-[35px] bg-[#D1D1D1] mt-6 ml-[22px]"></div>
        <p className="text-[13px] font-kanit font-bold mt-1 ml-[22px]">
          {props.year}
        </p>
        <p className="font-kanit text-[27px] font-normal text-[#A9A9A9] mt-1 mx-5">
          {props.title}
        </p>
        <button className="border mt-6 ml-5 px-5 pt-2 pb-[11px] text-[14px]">
          CHECK PROJECT
        </button>
      </div>
    </>
  );
};

export default ProjectCards;
