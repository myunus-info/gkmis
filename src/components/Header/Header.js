import { NavLink, Link } from "react-router-dom";
import logo from "./../images/logo.png";
// import classes from "./Header.module.css";

export default function Header() {
  return (
    <div
      className="bg-success"
      style={{ height: "80px", display: "flex", alignItems: "center" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg p-0 m-0">
              <div className="container-fluid">
                <NavLink className="navbar-brand fw-bold" href="#">
                  <img
                    style={{ width: "120px", height: "80px" }}
                    src={logo}
                    alt="logo"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                    <li className="nav-item">
                      <Link
                        style={{ color: "#fff" }}
                        className="nav-link active"
                        aria-current="page"
                        to="/academic"
                      >
                        Academic
                      </Link>
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
