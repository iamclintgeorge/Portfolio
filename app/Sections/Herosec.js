import React from "react";

const Herosec = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img className="w-96 mt-10 ml-20 grayscale" src="/Clintphoto.jpeg" alt="Profile Picture"/>
        </div>
        <div className="mt-36 ml-60">
          <p className="text-4xl">
            Crafting websites that seamlessly showcase your brand's unique
            value.
          </p>
          <button className="getbtn">GET IN TOUCH</button>
          <div className="designline1"></div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
