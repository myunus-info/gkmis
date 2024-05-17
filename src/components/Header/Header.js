import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./../images/logo.png";
import "./Header.css";

const Header = () => {
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
              <div className="bg-success text-white offcanvas-header border-bottom">
                <h5
                  className="offcanvas-title m-0 p-0"
                  id="offcanvasNavbarLabel"
                >
                  <NavLink to="/" className="navbar-brand fw-bold">
                    <img
                      style={{ width: "120px", height: "50px" }}
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
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/admission"
                    >
                      Admission
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fff" }}
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Departments
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/english-bgs">
                          English &amp; BGS
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/math-science">
                          Math &amp; Science
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/islamic-studies">
                          Islamic Studies
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/bangla">
                          Bangla
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/notice"
                    >
                      Notice
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      style={{ color: "#fff" }}
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gallery
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/photo-gallery">
                          Photo Gallery
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="https://www.youtube.com/channel/UC0fu3eYEHm9wpF-1lhrNOKw"
                        >
                          Video Gallery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/career"
                    >
                      Career
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      style={{ color: "#fff" }}
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </Link>
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
