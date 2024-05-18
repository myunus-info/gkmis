import React from "react";
import teachers from "./teacherData";
import Teacher from "./Teacher";
import Layout from "../Layout/Layout";

const AllTeachers = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default AllTeachers;
