import React from "react";
import logo from "../assets/2023/DevFest-2023-Logo.png";
import HamburgerMenu from "./hamburger.js";
import Navbar from "./navbar.js";

const Header = () => (
  <header className="bg-emerald-800 py-1 top-0 sticky z-10">
    <nav className="flex justify-between items-center w-11/12 mx-auto py-3">
      <div className="w-64">
        <a href={process.env.REACT_APP_SOCIAL_WEBSITE}>
          <img src={logo} className="p-4 sm:p-0" alt="DevFest Logo" />
        </a>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <a
          href={process.env.REACT_APP_DEVFEST_REGISTRATION_URL}
          className="text-white bg-Green500 hover:bg-Green500 hover:text-white rounded-full text-md px-6 py-4 mx-2"
        >
          Register
        </a>
      </div>
      <div className="">
        <HamburgerMenu />
      </div>
    </nav>
  </header>
);

export default Header;
