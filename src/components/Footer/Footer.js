import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import facebook from "../icons/facebook.svg";
import twitterX from "../icons/twitter-x.svg";
import youtube from "../icons/youtube.svg";
import Envelope from "../icons/Envelope";
import Telephone from "../icons/Telephone";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#2F2331",
        paddingTop: "60px",
        color: "#ddd",
      }}
    >
      <div className="container">
        {/* First row */}
        <div className="row">
          <div className="col-md-5">
            <div>
              <img
                style={{ width: "100px", height: "80px", marginBottom: "1rem" }}
                src={logo}
                alt="logo"
              />
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h4 style={{ marginBottom: "1rem" }}>Contact Us</h4>
              <p>
                Lorem ipsum is the single greatest threat ever since the 1500s,
              </p>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li style={{ marginBottom: ".5rem" }}>
                  <Telephone />
                  <span style={{ marginLeft: ".85rem" }}>+8801818251075</span>
                </li>
                <li>
                  <Envelope />
                  <span style={{ marginLeft: "1rem" }}>
                    principalgkmis@gmail.com
                  </span>
                </li>
              </ul>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "#FF6241",
                    marginRight: "1rem",
                    padding: ".5rem",
                    borderRadius: "50%",
                    lineHeight: "1rem",
                  }}
                >
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                </div>
                <div
                  style={{
                    backgroundColor: "#FF6241",
                    marginRight: "1rem",
                    padding: ".5rem",
                    borderRadius: "50%",
                    lineHeight: "1rem",
                  }}
                >
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitterX} alt="twitterX" />
                  </a>
                </div>
                <div
                  style={{
                    backgroundColor: "#FF6241",
                    padding: ".5rem",
                    borderRadius: "50%",
                    lineHeight: "1rem",
                  }}
                >
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtube} alt="youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4 style={{ marginBottom: "1rem" }}>Quick Links</h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                }}
              >
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/admission"
                  >
                    Admission
                  </Link>
                </li>
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/academic"
                  >
                    Academic
                  </Link>
                </li>
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/notice"
                  >
                    Notice
                  </Link>
                </li>
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li style={{ marginTop: ".25rem" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#ddd" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Last row */}
        <div className="row">
          <div className="col">
            <p className="text-center py-2">
              Copyright &copy; {new Date().getFullYear()}. All rights reserved
              by Gopaldi K M International School
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
