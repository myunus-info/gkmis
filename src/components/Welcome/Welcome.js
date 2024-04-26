import React from "react";
import classes from "./welcome.module.css";
// Icons
import icon1 from "../icons/icon1.png";
import icon2 from "../icons/icon2.png";
import icon3 from "../icons/icon3.png";
import icon4 from "../icons/icon4.png";

const Welcome = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <div className="container">
        {/* First Row */}
        <div className="row">
          <div className="col">
            <h2
              style={{ textAlign: "center", color: "#333", fontWeight: "700" }}
            >
              Welcome to{" "}
              <span style={{ color: "#f37335" }}>
                Gopaldi K M International School
              </span>
            </h2>
            <p className={classes["welcome-text"]}>
              The K M School, Alhamdulillah, provides students excellent quality
              education and facilities for their overall development. They are
              taught moral values and various skills to face the dynamic
              challenges and opportunities of life with care, confidence and
              self-discipline. The school provides an environment in which the
              students can learn, understand and practise their ‘way of life’ –
              Islam, as they strive for excellence in subjects like Mathematics,
              Science, English, Bengali and others. It moulds the students’
              personality according to righteous Islamic tenets and inculcates
              in them the values and concepts of caring, sharing and being
              just... for truth, universal brotherhood and peace to prevail. The
              K M School Teachers and students ratio is less than 1:10 and K M
              School staff and students ratio is less than 1:5 which is unique
              and one of the lowest amongst the international schools worldwide.
              This helps in maintaining high quality, reliability and efficiency
              of the education and facilities provided to the students at K M
              School. K M School guidelines and regulations are based on the
              glorious Qur’an and the authentic Hadith of Prophet Muhammad (SM).
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6 col-xl-3">
            <div>
              <img src={icon1} alt="icon" />
              <h4 style={{ fontSize: "1.2rem", marginTop: ".5rem" }}>
                Awesome Teachers
              </h4>
              <p>Vivamus interdum, mauris interdum quis curdum sodales</p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div>
              <img src={icon2} alt="icon" />
              <h4 style={{ fontSize: "1.2rem", marginTop: ".5rem" }}>
                Global Certificate
              </h4>
              <p>
                Pelleneget tespharetra que fringilla egugue id eget pharetra
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div>
              <img src={icon3} alt="icon" />
              <h4 style={{ fontSize: "1.2rem", marginTop: ".5rem" }}>
                Best Programs
              </h4>
              <p>
                Etiam risus neque, volutpat vel laoreet a, finibus volutpat non
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div>
              <img src={icon4} alt="icon" />
              <h4 style={{ fontSize: "1.2rem", marginTop: ".5rem" }}>
                Student Support Service
              </h4>
              <p>
                Mauris nec mi fequis ugiat, cursus tortor nec, pharetra tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
