import React from "react";
import Layout from "../../Layout/Layout";
import classes from "./Notice.module.css";

const Notice = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={classes[`notice-text`]}>
              <h6>NOTICE</h6>
              <h3 className={classes[`notice-text-big-title`]}>
                Notice Regarding Course Enrollment
              </h3>

              <p>
                All concerned may kindly be informed that lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eveniet voluptatum ea error
                asperiores repellat magnam possimus, dolorem eius quam omnis
                voluptates adipisci eligendi vitae architecto quos quod fugit
                minima voluptatibus tempore, ipsa quibusdam. Quaerat molestiae
                deleniti et vitae tempora, asperiores provident ducimus unde,
                explicabo beatae, numquam magnam excepturi sint eaque eos quas
                vel qui aperiam? Ipsa, nisi enim dolor natus corporis totam quam
                fugiat beatae dolores. Voluptatum facere, aspernatur labore
                expedita optio quos, molestiae, reiciendis non sed voluptas
                laborum eaque ratione velit deleniti veniam unde repellendus ea!
                Doloribus veritatis inventore cupiditate architecto voluptate
                officiis qui sed pariatur? Debitis, et deserunt!
              </p>

              <p>
                Enrollment can be accoplished until 31-01-2025 after paying 500
                Tk late fee.
              </p>

              <p>
                All the teachers and concerned bodies are requested to take
                necessary initiatives to inform the students of Gopaldi K M
                International School regarding the above decisions.
              </p>

              <p style={{ marginTop: "3rem" }}>
                Muhammad Kamal Hussain{" "}
                <span style={{ display: "block" }}>Principal</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Notice;
