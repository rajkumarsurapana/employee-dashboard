import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

export default function Employees({ employees, setEmployees }) {
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [leaveFilter, setLeaveFilter] = useState("All");

  // --------------------------
  // ⭐ Add Employee Form State
  // --------------------------

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    department: "",
    salary: "",
    email: "",
    phone: "",
    location: "",
    joined: "",
    leave: false,
  });

  // --------------------------
  // ⭐ Handle Form Changes
  // --------------------------

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNewEmployee((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // --------------------------
  // ⭐ Add Employee Function
  // --------------------------

  const handleAddEmployee = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newEmployee.name || !newEmployee.role || !newEmployee.department) {
      alert("Name, Role, and Department are required");
      return;
    }

    const employeeToAdd = {
      id: Date.now(),
      ...newEmployee,
      salary: Number(newEmployee.salary),
    };

    setEmployees([employeeToAdd, ...employees]);

    // Clear form
    setNewEmployee({
      name: "",
      role: "",
      department: "",
      salary: "",
      email: "",
      phone: "",
      location: "",
      joined: "",
      leave: false,
    });
  };

  // --------------------------
  // ⭐ Search + Filter Logic
  // --------------------------

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.department.toLowerCase().includes(search.toLowerCase()) ||
      emp.location.toLowerCase().includes(search.toLowerCase());

    const matchesDept =
      departmentFilter === "All" || emp.department === departmentFilter;

    const matchesLeave =
      leaveFilter === "All" ||
      (leaveFilter === "On Leave" && emp.leave === true) ||
      (leaveFilter === "Active" && emp.leave === false);

    return matchesSearch && matchesDept && matchesLeave;
  });

  return (
    <div className="employees-page">
      {/* -----------------------------
          🔍 Search + Filters
      ------------------------------ */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search employees..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Department Filter */}
        <select
          className="filter-select"
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
        >
          <option value="All">All Departments</option>
          {[...new Set(employees.map((e) => e.department))].map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Leave Filter */}
        <select
          className="filter-select"
          value={leaveFilter}
          onChange={(e) => setLeaveFilter(e.target.value)}
        >
          <option value="All">All Employees</option>
          <option value="Active">Active</option>
          <option value="On Leave">On Leave</option>
        </select>
      </div>

      {/* -----------------------------
          🧾 ADD EMPLOYEE FORM
      ------------------------------ */}

      <div className="employee-form-card">
        <h3>Add New Employee</h3>

        <form className="employee-form" onSubmit={handleAddEmployee}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Role (e.g., React Developer)"
            name="role"
            value={newEmployee.role}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Department"
            name="department"
            value={newEmployee.department}
            onChange={handleChange}
          />

          <input
            type="number"
            placeholder="Salary"
            name="salary"
            value={newEmployee.salary}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newEmployee.email}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={newEmployee.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Location"
            name="location"
            value={newEmployee.location}
            onChange={handleChange}
          />

          <input
            type="date"
            name="joined"
            value={newEmployee.joined}
            onChange={handleChange}
          />

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="leave"
              checked={newEmployee.leave}
              onChange={handleChange}
            />
            On Leave
          </label>

          <button type="submit" className="btn-primary">
            + Add Employee
          </button>
        </form>
      </div>

      {/* -----------------------------
          EMPLOYEE CARDS GRID
      ------------------------------ */}

      <div className="employee-grid">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <EmployeeCard key={emp.id} emp={emp} />
          ))
        ) : (
          <p className="empty-text">No matching employees found.</p>
        )}
      </div>
    </div>
  );
}
