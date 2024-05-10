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
                  <p style={{ marginTop: "-1rem" }}>
                    Behind Gopaldi Girls' High School, Islampur, Gopaldi,
                    Araihazar, Narayanganj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.4524910333266!2d90.70786917451922!3d23.80250348677575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37543700513cb5e3%3A0x92aa8c3e9788afc2!2sGopaldi%20K%20M%20International%20School!5e0!3m2!1sen!2sbd!4v1715317984234!5m2!1sen!2sbd"
            width="100%"
            height="450"
            loading="lazy"
            title="gkmis-location"
            referrerpolicy="no-referrer-when-downgrade"
            iframe
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
