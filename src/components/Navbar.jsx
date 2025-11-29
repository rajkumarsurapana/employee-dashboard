export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2 className="navbar-title">Welcome, Admin 👋</h2>
        <p className="navbar-subtitle">
          Track your employees and stats in one place.
        </p>
      </div>
      <div className="navbar-right">
        <input className="search-input" type="text" placeholder="Search..." />
        <div className="avatar">
          <span>RS</span>
        </div>
      </div>
    </header>
  );
}
