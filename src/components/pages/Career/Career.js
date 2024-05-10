import React from "react";
import Layout from "../../Layout/Layout";
import check from "../../icons/check-circle.png";
import classes from "./Career.module.css";

const Career = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes[`career-text`]}>
              <h6>CAREER</h6>
              <h3 className={classes[`career-text-big-title`]}>
                Job Title:{" "}
                <span style={{ fontWeight: "400" }}>Assistant Teacher</span>
              </h3>

              <h5>About Us</h5>
              <p>
                We are a prestigious language school committed to providing
                high-quality English language education to students of all ages.
                With a focus on interactive and immersive learning experiences,
                we aim to cultivate a passion for English language and culture
                while fostering communication skills that empower our students
                to succeed in a globalized world.
              </p>

              <h5>Position Overview:</h5>
              <p>
                We are seeking a dedicated and dynamic English Language School
                Teacher to join our team. The ideal candidate will be passionate
                about teaching English as a second language and possess the
                skills to create engaging and effective lessons that cater to
                diverse learning styles.
              </p>
              <h5>Responsibilities:</h5>
              <ul>
                <li>
                  <img src={check} alt="check" />
                  Plan and deliver interactive English language lessons that
                  inspire and motivate students to learn.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Create a supportive and inclusive learning environment where
                  students feel comfortable practicing their English language
                  skills.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Assess student progress and provide constructive feedback to
                  facilitate growth and development.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Utilize a variety of teaching methods and resources to
                  accommodate different learning styles and abilities.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Collaborate with colleagues to develop curriculum materials
                  and teaching strategies that align with the school's
                  objectives.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Communicate effectively with students, parents, and colleagues
                  to ensure a positive and productive learning experience for
                  all.
                </li>
              </ul>
              <h5>Qualifications:</h5>
              <ul>
                <li>
                  <img src={check} alt="check" />
                  Bachelor's degree in English, Education, Linguistics, or
                  related field.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Teaching certification (e.g., TEFL, TESOL, CELTA) preferred.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Previous experience teaching English as a second language to
                  students of varying proficiency levels.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Strong communication and interpersonal skills.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Ability to adapt teaching methods to meet the needs of diverse
                  learners.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Passion for language education and a commitment to student
                  success.
                </li>
              </ul>

              <h5>Benefits:</h5>
              <ul>
                <li>
                  <img src={check} alt="check" />
                  Competitive salary commensurate with experience and
                  qualifications.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Professional development opportunities to enhance teaching
                  skills and knowledge.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Supportive work environment with opportunities for growth and
                  advancement.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Health and wellness benefits package.
                </li>
                <li>
                  <img src={check} alt="check" />
                  Access to resources and materials to support teaching
                  effectiveness.
                </li>
              </ul>

              <h5>How to Apply:</h5>
              <p>
                To apply for the English Language School Teacher position,
                please submit your resume, cover letter, and any relevant
                teaching credentials to{" "}
                <span style={{ fontWeight: "700" }}>
                  principalgkmis@gmail.com
                </span>
                . In your cover letter, please include a brief statement
                outlining your teaching philosophy and why you are interested in
                joining our team.
              </p>
              <p>
                We thank all applicants for their interest in joining our
                school; however, only those selected for an interview will be
                contacted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
