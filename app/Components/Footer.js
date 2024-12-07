import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row mx-[150px] mb-[70px] justify-between mt-10">
        <div className="text-[18px] font-kanit leading-loose">
          <p className="text-[21px]">Clint George</p>
          <p className="text-[#6B6B6B]">
            +91 7506950281 &nbsp; | &nbsp;{" "}
            <span className="text-white">clintbgeorge@gmail.com</span>
          </p>
          <p className="text-[#6B6B6B]">&#169; Clint George 2024</p>
        </div>
        <div className="text-[18px] font-kanit">
          <ul className="flex flex-col leading-loose text-right">
            <li>
              <a className="footlink" href="home.html">
                H O M E
              </a>
            </li>
            <li>
              <a className="footlink" href="home.html">
                A B O U T &nbsp; M E
              </a>
            </li>
            <li>
              <a className="footlink" href="home.html">
                C O N T A C T
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
