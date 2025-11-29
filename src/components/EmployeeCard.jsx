export default function EmployeeCard({ emp, onDelete }) {
  return (
    <div className="employee-card">
      <div className="employee-avatar">
        {emp.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className="employee-info">
        <h3>{emp.name}</h3>
        <p>{emp.role}</p>
        <span className="employee-tag">{emp.department}</span>
      </div>
      <button className="btn-delete" onClick={() => onDelete(emp.id)}>
        ✕
      </button>
    </div>
  );
}
