import React from "react";
import img1 from "../../images/photo-gallery/1.jpg";
import img2 from "../../images/photo-gallery/2.jpg";
import img3 from "../../images/photo-gallery/3.jpg";
import img4 from "../../images/photo-gallery/4.jpg";
import img5 from "../../images/photo-gallery/5.jpg";
import img6 from "../../images/photo-gallery/6.jpg";
import img7 from "../../images/photo-gallery/7.jpg";
import img8 from "../../images/photo-gallery/8.jpg";
import img9 from "../../images/photo-gallery/9.jpg";
import img10 from "../../images/photo-gallery/10.jpg";
import img11 from "../../images/photo-gallery/11.jpg";
import img12 from "../../images/photo-gallery/12.jpg";
import img13 from "../../images/photo-gallery/13.jpg";
import img14 from "../../images/photo-gallery/14.jpg";
import img15 from "../../images/photo-gallery/15.jpg";
import img16 from "../../images/photo-gallery/16.jpg";
import img17 from "../../images/photo-gallery/17.jpg";
import img18 from "../../images/photo-gallery/18.jpg";
import img19 from "../../images/photo-gallery/19.jpg";
import img20 from "../../images/photo-gallery/20.jpg";
import classes from "./PhotoGallery.module.css";

const PhotoGallery = () => {
  return (
    <div>
      <div className="container">
        <div className="row" style={{ margin: "60px 0" }}>
          <h2 style={{ marginBottom: "1rem" }}>
            Photo <span style={{ color: "#f37335" }}>Gallery</span>{" "}
          </h2>
          <div className="col">
            <div className={classes["gallery-wrapper"]}>
              <div className={classes.big}>
                <img src={img1} alt="img1" />
              </div>
              <div className={classes.wide}>
                <img src={img2} alt="img2" />
              </div>
              <div>
                <img src={img3} alt="img3" />
              </div>
              <div>
                <img src={img4} alt="img4" />
              </div>
              <div>
                <img src={img5} alt="img5" />
              </div>
              <div>
                <img src={img6} alt="img6" />
              </div>
              <div>
                <img src={img7} alt="img7" />
              </div>
              <div>
                <img src={img8} alt="img8" />
              </div>
              <div>
                <img src={img9} alt="img9" />
              </div>
              <div>
                <img src={img10} alt="img10" />
              </div>
              <div>
                <img src={img11} alt="img11" />
              </div>
              <div>
                <img src={img12} alt="img12" />
              </div>
              <div>
                <img src={img13} alt="img13" />
              </div>
              <div className={classes.tall}>
                <img src={img14} alt="img14" />
              </div>
              <div>
                <img src={img15} alt="img15" />
              </div>

              <div>
                <img src={img16} alt="img16" />
              </div>
              <div className={classes.big}>
                <img src={img17} alt="img17" />
              </div>
              <div>
                <img src={img18} alt="img18" />
              </div>
              <div>
                <img src={img19} alt="img19" />
              </div>
              <div>
                <img src={img20} alt="img20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
