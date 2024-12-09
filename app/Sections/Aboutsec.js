import React from "react";

const Aboutsec = () => {
  return (
    <>
      <div className="mt-0">
        <p className="relative text-[22.5vw] font-kanit text-[#191919]">
          About Me
        </p>
        <div className="absolute flex flex-col ml-10 sm:flex-row mt-[-20vw] sm:ml-0 sm:mt-[-200px]">
          <div className="flex-1 text-xl text-nowrap sm:ml-28 font-kanit text-[40px] mr-0 font-semibold ">
            <p>01-Introduction</p>
          </div>
          <div className="flex-[3] mt-12 sm:mt-0 mr-10 sm:mr-24 text-xl sm:text-[20px] font-kanit text-justify">
            <p className="hidden sm:block">
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
            <p className="block sm:hidden">
              I am a passionate full-stack developer skilled in creating
              websites, mobile apps, and desktop software. With expertise in
              front-end and back-end development, I build scalable,
              user-friendly solutions that solve real-world challenges. I thrive
              on collaborating with teams to deliver high-quality software that
              meets client needs, drives growth, and delivers long-term value.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-96 sm:mt-40 h-5 w-56 bg-slate-200"></div>
    </>
  );
};

export default Aboutsec;
