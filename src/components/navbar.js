import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <div>
      <ul className="hidden lg:flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/speakers" className="text-white">
            Speakers
          </Link>
        </li>
        <li>
          <Link to="/sponsors" className="text-white">
            Sponsors
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="text-white">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/location" className="text-white">
            Location
          </Link>
        </li>
        <li>
          <Link to="/code-of-conduct" className="text-white">
            Code of Conduct
          </Link>
        </li>
        <li>
          <a href="http://googledevsflorida.blogspot.com/" rel="noopener noreferrer" target="_blank" className="text-white" >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
