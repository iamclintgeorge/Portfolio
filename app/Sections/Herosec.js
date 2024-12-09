import React from "react";

const Herosec = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div>
          <img
            className="w-[70vw] ml-16 sm:w-[85vw] mt-12 sm:ml-24 mr-0 grayscale"
            src="/Clintphoto.jpeg"
            alt="Profile Picture"
          />
        </div>
        <div className="mt-20 ml-14 mr-10 sm:mt-28 sm:ml-48">
          <p className="text-[35px] text-center sm:text-[62px] sm:text-left font-kanit mr-10 mb-16 sm:leading-[60px]">
            Crafting custom software solutions that meet your unique needs.
          </p>
          <button className="border ml-16 py-3 px-7 sm:ml-0">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="mt-24 sm:mt-32 mb-8 h-5 w-56 bg-slate-200 ml-auto"></div>
    </>
  );
};

export default Herosec;
