import React from "react";

const Header = () => {
  return (
    <>
      <div class="navbardiv">
        <div class="leftnav">
          <p class="leftnavtext">
            <a class="navlink" href="home.html">
              clintgeorge.
            </a>
          </p>
        </div>
        <div class="rightnav">
          <ul class="navmenubutton buttonlink">
            <li>
              <a class="navlink" href="home.html">
                H O M E
              </a>
            </li>
            <li>
              <a class="navlink" href="home.html">
                A B O U T &nbsp; M E
              </a>
            </li>
            <li>
              <a class="navlink" href="home.html">
                C O N T A C T
              </a>
            </li>
            <button class="themebtn">Theme</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
