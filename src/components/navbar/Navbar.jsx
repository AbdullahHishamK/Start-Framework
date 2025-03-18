import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    setBgColor("transparent");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-backgroud fixed-top py-4">
        <div className="container ">
          <NavLink
            className="navbar-brand text-white fw-bolder fs-2"
            to="/"
            style={{ backgroundColor: bgColor }}
            onClick={handleClick}
          >
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-2">
                <NavLink
                  className="nav-link text-white fw-bold mt-md-0 mt-3 px-2"
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  className="nav-link text-white fw-bold mt-md-0 mt-3 px-2"
                  to="/portifolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item me-2">
                <NavLink
                  className="nav-link text-white fw-bold mt-md-0 mt-3 px-2"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;