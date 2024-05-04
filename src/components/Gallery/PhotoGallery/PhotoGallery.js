import React from "react";
import images from "./index";
import classes from "./PhotoGallery.module.css";
import Layout from "../../Layout/Layout";

const PhotoGallery = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default PhotoGallery;
