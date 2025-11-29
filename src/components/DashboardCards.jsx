import { useNavigate } from "react-router-dom";

export default function DashboardCards({ employees }) {
  const navigate = useNavigate();

  // ✅ Dynamic values from employees list
  const totalEmployees = employees.length;

  const onLeave = employees.filter((emp) => emp.leave === true).length;

  const newJoiners = employees.filter((emp) => {
    const joinMonth = new Date(emp.joined).getMonth();
    const currentMonth = new Date().getMonth();
    const joinYear = new Date(emp.joined).getFullYear();
    const currentYear = new Date().getFullYear();

    return joinMonth === currentMonth && joinYear === currentYear;
  }).length;

  const departments = new Set(employees.map((emp) => emp.department)).size;

  // Cards list with dynamic values
  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
      subtitle: "Active employees",
      onClick: () => navigate("/employees"),
    },
    {
      title: "On Leave",
      value: onLeave,
      subtitle: "Today",
      onClick: () => alert("Leave details coming soon..."),
    },
    {
      title: "New Joiners",
      value: newJoiners,
      subtitle: "This month",
      onClick: () => alert("New joiners report coming soon..."),
    },
    {
      title: "Departments",
      value: departments,
      subtitle: "Total departments",
      onClick: () => alert("Department list coming soon..."),
    },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="card card-click"
          onClick={card.onClick}
        >
          <h3>{card.title}</h3>
          <p className="card-value">{card.value}</p>
          <span className="card-subtitle">{card.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
