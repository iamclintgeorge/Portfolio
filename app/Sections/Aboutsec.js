import React from "react";

const Aboutsec = () => {
  return (
    <>
      <div className="mt-0">
        <p className="relative text-[22.5vw] font-kanit text-[#191919]">
          About Me
        </p>
        <div className="absolute flex flex-row mt-[-200px]">
          <div className="flex-1 text-xl ml-28 font-kanit text-[40px] mr-0 font-semibold">
            <p>01-Introduction</p>
          </div>
          <div className="flex-[3] mr-24 text-[20px] font-kanit text-justify">
            <p>
              I am a passionate and skilled full-stack developer with experience
              in building websites, mobile applications, and desktop software.
              Over the years, I’ve had the opportunity to work with a variety of
              organizations, helping them achieve tangible results through
              custom-built solutions. My expertise spans both front-end and
              back-end development, allowing me to create seamless, scalable,
              and user-friendly applications that address real-world challenges.
              I enjoy collaborating closely with teams to ensure that projects
              not only meet client expectations but also provide long-term
              value. Whether it's optimizing existing platforms or creating new
              digital products from scratch, I am committed to delivering
              high-quality software that drives business growth and success.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 h-5 w-56 bg-slate-200"></div>
    </>
  );
};

export default Aboutsec;
