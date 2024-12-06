import React from "react";

const Herosec = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img
            className="w-[85vw] mt-12 ml-24 mr-0 grayscale"
            src="/Clintphoto.jpeg"
            alt="Profile Picture"
          />
        </div>
        <div className="mt-28 ml-48">
          <p className="text-[62px] font-kanit mr-10 mb-16 leading-[60px]">
            Crafting custom software solutions that meet your unique needs.
          </p>
          <button className=" border py-3 px-7">GET IN TOUCH</button>
          <div className="mt-32 mb-8 h-5 w-56 bg-slate-200 ml-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
