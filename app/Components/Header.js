import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex w-full m-0 p-0 flex-col sm:flex-row justify-between">
        <div className="flex-1">
          <p className="text-[7vw] ml-1 text-center sm:ml-56text-[2.2vw] font-serif mt-10 cursor-pointer text-white">
            clintgeorge.
          </p>
        </div>
        <div className="hidden sm:block flex-1">
          <ul className="flex justify-evenly font-montserrat text-[1.2vw] mt-14 text-white mb-10">
            <li>H O M E</li>
            <li>A B O U T &nbsp; M E</li>
            <li>C O N T A C T</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
