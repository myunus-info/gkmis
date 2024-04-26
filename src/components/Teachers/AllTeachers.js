import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import teachers from "./teacherData";
import Teacher from "./Teacher";

const AllTeachers = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#F0F0F0", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <h2>
              Meet Our{" "}
              <span style={{ color: "rgb(243, 115, 53)" }}>
                {" "}
                Qualified Teachers
              </span>{" "}
            </h2>
            {teachers.map((teacher) => (
              <Teacher key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllTeachers;
