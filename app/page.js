import React from "react";
import Header from "./Components/Header";
import Herosec from "./Components/Herosec";
import Aboutsec from "./Components/Aboutsec";
import Projectsec from "./Components/Projectsec";
import Skillsec from "./Components/Skillsec";
import Getintouch from "./Components/Getintouch";
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
