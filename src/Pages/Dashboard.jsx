import DashboardCards from "../components/DashboardCards";
import Charts from "../components/Charts";

export default function Dashboard({ employees }) {
  return (
    <div className="dashboard-container">
      {/* Top Summary Cards */}
      <DashboardCards employees={employees} />

      {/* Charts Section */}
      <Charts employees={employees} />
    </div>
  );
}
