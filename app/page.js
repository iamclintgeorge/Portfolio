import React from "react";
import Header from "./Components/Header";
import Herosec from "./Sections/Herosec";
import Aboutsec from "./Sections/Aboutsec";
import Projectsec from "./Sections/Projectsec";
import Skillsec from "./Sections/Skillsec";
import Getintouch from "./Sections/Getintouch";
import Footer from "./Components/Footer";

const home = () => {
  return (
    <>
      <Header />
      <Herosec />
      <Aboutsec />
      <Projectsec />
      <Skillsec />
      <Getintouch />
      <Footer />
    </>
  );
};

export default home;
