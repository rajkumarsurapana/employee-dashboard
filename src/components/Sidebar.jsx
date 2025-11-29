import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-circle">E</span>
        <span className="logo-text">
          Employee
          <br />
          Dashboard
        </span>
      </div>

      <nav className="sidebar-menu">
        <NavLink className="menu-link" to="/">
          🏠 Dashboard
        </NavLink>
        <NavLink className="menu-link" to="/employees">
          👨‍💼 Employees
        </NavLink>
      </nav>
    </aside>
  );
}
