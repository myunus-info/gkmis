import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../images/logo.png";
import "./Header.css";

const Header = () => {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "yellow" : "#fff",
    fontWeight: isActive ? "600" : "400",
  });
  // const dropdownLinkStyles = ({ isActive }) => ({
  //   color: !isActive ? "yellow" : "#fff",
  //   fontWeight: !isActive ? "600" : "400",
  // });

  return (
    <>
      <div style={{ marginBottom: "5.65rem" }}>
        <nav className="navbar navbar-expand-lg bg-success fixed-top m-0 p-0">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand fw-bold">
              <img
                style={{ width: "120px", height: "80px" }}
                src={logo}
                alt="logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="sidebar offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              {/* Sidebar Header */}
              <div className="bg-success text-white offcanvas-header">
                <h5
                  className="offcanvas-title m-0 p-0"
                  id="offcanvasNavbarLabel"
                >
                  <NavLink to="/" className="navbar-brand fw-bold">
                    <img
                      style={{ width: "120px", height: "58px" }}
                      src={logo}
                      alt="logo"
                    />
                  </NavLink>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body ">
                {/* Sidebar-Header */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/admission"
                    >
                      Admission
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      // style={dropdownLinkStyles}
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Departments
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/english-bgs">
                          English &amp; BGS
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/math-science">
                          Math &amp; Science
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/islamic-studies"
                        >
                          Islamic Studies
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/bangla">
                          Bangla
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/notice"
                    >
                      Notice
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      style={navLinkStyles}
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gallery
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to="/photo-gallery">
                          Photo Gallery
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="https://www.youtube.com/channel/UC0fu3eYEHm9wpF-1lhrNOKw"
                        >
                          Video Gallery
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/career"
                    >
                      Career
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={navLinkStyles}
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
