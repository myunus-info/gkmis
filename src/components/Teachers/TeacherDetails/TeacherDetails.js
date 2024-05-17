import React from "react";
import { useParams } from "react-router-dom";
import teachers from "../teacherData";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
// Icons
import facebook from "../../icons/facebook.svg";
import twitterX from "../../icons/twitter-x.svg";
import envelope from "../../icons/envelope.svg";
import Layout from "../../Layout/Layout";

const TeacherDetails = () => {
  const { id } = useParams();

  const teacher = teachers.find((teacher) => teacher.id === Number(id));
  const {
    image,
    name,
    education,
    email,
    address,
    designation,
    short_intro,
    experience,
    experience_and_biography,
    // teaching_skills,
  } = teacher || {};
  // console.log("Teacher ", teacher);

  return (
    <Layout>
      <div style={{ margin: "3.5rem 0" }}>
        <div className="container">
          {/* First row */}
          <div className="row">
            <div className="col-md-4">
              <div>
                <img
                  style={{
                    width: "97%",
                    height: "320px",
                    borderRadius: "1rem",
                  }}
                  src={image}
                  alt="teacher"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FF6241",
                      marginRight: "1.5rem",
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
                      marginRight: "1.5rem",
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
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={envelope} alt="email" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <h3 style={{ color: "#523257" }}>{name}</h3>
                <h5 style={{ color: "#523257", fontSize: "1rem" }}>
                  {education}
                </h5>
                <h5 style={{ color: "#523257" }}>{designation}</h5>
                <p style={{ color: "#3D3D3D" }}>{short_intro}</p>

                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#523257",
                      marginRight: ".5rem",
                    }}
                  >
                    Name:
                  </span>
                  {name}
                </p>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#523257",
                      marginRight: ".5rem",
                    }}
                  >
                    Designation:
                  </span>
                  {designation}
                </p>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#523257",
                      marginRight: ".5rem",
                    }}
                  >
                    Experience:
                  </span>
                  {experience}
                </p>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#523257",
                      marginRight: ".5rem",
                    }}
                  >
                    Email:
                  </span>
                  {email}
                </p>
                <p>
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#523257",
                      marginRight: ".5rem",
                    }}
                  >
                    Address:
                  </span>
                  {address}
                </p>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="row mt-5">
            <div className="col">
              <div>
                <h3 style={{ color: "#523257", fontWeight: "700" }}>
                  Experience & Biography
                </h3>
                <p style={{ color: "#3D3D3D" }}>{experience_and_biography}</p>
                <p style={{ color: "#3D3D3D" }}>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus
                </p>
              </div>
              <div>
                <h3 style={{ color: "#523257", fontWeight: "700" }}>
                  Teacher Skills
                </h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <h5 className="progress-title" style={{ color: "#523257" }}>
                  Teaching
                </h5>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
                <h5 className="progress-title" style={{ color: "#523257" }}>
                  Speaking
                </h5>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Info example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div
                    className="progress-bar bg-info text-dark"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h5 className="progress-title" style={{ color: "#523257" }}>
                  Child care
                </h5>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Warning example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ marginBottom: "1.5rem" }}
                >
                  <div
                    className="progress-bar bg-warning text-dark"
                    style={{ width: "95%" }}
                  >
                    95%
                  </div>
                </div>
                <h5 className="progress-title" style={{ color: "#523257" }}>
                  Communication
                </h5>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Danger example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "97%" }}
                  >
                    97%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeacherDetails;
