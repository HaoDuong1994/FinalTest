import { Link, NavLink } from "react-router-dom";

function TodoMenu() {
  return (
    <div className="menu-wrapper">
      <div className="btn-menu center">
        <Link to="/">All</Link>
      </div>
      <div className="btn-menu center">
        <Link to="/active">Active</Link>
      </div>
      <div className="btn-menu center">
        <Link to="/complete">Complete</Link>
      </div>
    </div>
  );
}

export default TodoMenu;
