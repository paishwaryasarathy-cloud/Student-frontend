import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "black",
        padding: 15
      }}
    >
      <Link
        to="/"
        style={{ color: "white", marginRight: 20 }}
      >
        Add Student
      </Link>

      <Link
        to="/view"
        style={{ color: "white" }}
      >
        View Students
      </Link>
    </div>
  );
}

export default Navbar;