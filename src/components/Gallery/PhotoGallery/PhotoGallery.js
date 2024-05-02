import React from "react";
import images from "./index";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import classes from "./PhotoGallery.module.css";

const PhotoGallery = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row" style={{ margin: "60px 0" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            Photo <span style={{ color: "#f37335" }}>Gallery</span>
          </h2>
          <div className="col">
            <div className={classes["gallery-wrapper"]}>
              {images.map(({ img, id }) => (
                <div>
                  <img src={img} alt={id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhotoGallery;
