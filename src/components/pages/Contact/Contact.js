import React from "react";
import Layout from "../../Layout/Layout";
// import location from "../../icons/352521_location_on_icon.svg";
// import location from "../../icons/location-2955.svg";
import location from "../../icons/location-sign-svgrepo-com.svg";
import phone from "../../icons/telephone.svg";
import email from "../../icons/envelope.svg";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes[`contact-text`]}>
              <h6>CONTACT US</h6>
              <h3 className={classes[`contact-text-big-title`]}>
                Get In Touch
              </h3>

              <p>
                Thank you for your interest in reaching out to us! We're here to
                assist you with any inquiries or concerns you may have. Please
                feel free to contact us using any of the methods below:
              </p>
              <h5>Contact Information:</h5>

              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #eee",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <img
                    className={classes[`contact-icon`]}
                    src={phone}
                    alt="Phone"
                  />
                </div>
                <div>
                  <p style={{ fontWeight: "700" }}>Phone Number</p>
                  <p style={{ marginTop: "-1rem" }}>01818-251075</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #eee",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <img
                    className={classes[`contact-icon`]}
                    src={email}
                    alt="email"
                  />
                </div>
                <div>
                  <p style={{ fontWeight: "700" }}>Email Address</p>
                  <p style={{ marginTop: "-1rem" }}>principalgkmis@gmail</p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    className={classes[`contact-icon`]}
                    src={location}
                    alt="Location"
                  />
                </div>
                <div>
                  <p style={{ fontWeight: "700" }}>Visit Us</p>
                  <p style={{ marginTop: "-1rem" }}>principalgkmis@gmail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
