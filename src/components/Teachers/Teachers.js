import teachers from "./teacherData";
import Teacher from "./Teacher";
import { useNavigate } from "react-router-dom";

export default function Teachers() {
  const navigate = useNavigate();

  return (
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
          {teachers.slice(0, 6).map((teacher) => (
            <Teacher key={teacher.id} teacher={teacher} />
          ))}
          <button
            className="btn btn-outline-info"
            onClick={() => navigate("/teachers")}
            style={{
              textAlign: "right",
              cursor: "pointer",
              width: "120px",
              marginLeft: "auto",
              marginRight: "12px",
            }}
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
}
