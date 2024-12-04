import React from "react";

const Herosec = () => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img
            className="w-[50vw] mt-10 ml-20 grayscale"
            src="/Clintphoto.jpeg"
            alt="Profile Picture"
          />
        </div>
        <div className="mt-36 ml-60">
          <p className="text-4xl font-bold mr-10 mb-10">
            Crafting websites that seamlessly showcase your brand's unique
            value.
          </p>
          <button>GET IN TOUCH</button>
          <div className="mt-24 mb-24 h-5 w-56 bg-slate-200 ml-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Herosec;
