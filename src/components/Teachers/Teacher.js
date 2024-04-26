import facebook from "../icons/facebook.svg";
import twitterX from "../icons/twitter-x.svg";
import email from "../icons/envelope.svg";
import { useNavigate } from "react-router-dom";

export default function Teacher({ teacher }) {
  const { id, image, name, designation, short_intro } = teacher || {};
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <div
        className="card "
        style={{
          padding: "1rem",
          margin: "1rem 0",
          boxShadow: "-2px 1px 5px rgba(0, 0, 0, 0.2)",
          border: "none",
        }}
      >
        <img
          src={image}
          style={{ height: "300px" }}
          className="card-img-top "
          alt={`teacher${id}`}
        />
        <div className="card-body p-0 mt-3">
          <h3 className="card-title" style={{ fontSize: "1.35rem" }}>
            {name}
          </h3>
          <h5 className="card-title" style={{ fontSize: "1rem" }}>
            {designation}
          </h5>
          <p className="card-text">{short_intro}</p>
          <div style={{ display: "flex", marginBottom: "1.5rem" }}>
            <div
              style={{
                backgroundColor: "#FF6241",
                marginRight: "1rem",
                padding: ".5rem",
                borderRadius: "50%",
                lineHeight: "1rem",
              }}
            >
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
            <div
              style={{
                backgroundColor: "#FF6241",
                marginRight: "1rem",
                padding: ".5rem",
                borderRadius: "50%",
                lineHeight: "1rem",
              }}
            >
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={twitterX} alt="twitterX" />
              </a>
            </div>
            <div
              style={{
                backgroundColor: "#FF6241",
                padding: ".5rem",
                borderRadius: "50%",
                lineHeight: "1rem",
              }}
            >
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={email} alt="email" />
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate(`/teachers/${id}`)}
          className="btn btn-outline-primary"
        >
          View details
        </button>
      </div>
    </div>
  );
}
