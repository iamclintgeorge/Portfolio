import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex-1">
          <p className="text-xl mt-5 ml-10 cursor-pointer text-white">
            clintgeorge.
          </p>
        </div>
        <div className="flex-1">
          <ul className="flex justify-evenly buttonlink mt-7">
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
