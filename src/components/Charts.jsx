import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ employees }) {
  // -------------------------------------------
  // ⭐ 1. EMPLOYEE GROWTH (Jan–Dec cumulative)
  // -------------------------------------------

  const fullMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const growthData = fullMonths.map((month, idx) => {
    const count = employees.filter((emp) => {
      const joinDate = new Date(emp.joined);
      return joinDate.getMonth() <= idx; // cumulative growth
    }).length;

    return {
      month,
      employees: count,
    };
  });

  // -------------------------------------------
  // ⭐ 2. DEPARTMENT-WISE EMPLOYEE COUNT (All deps)
  // -------------------------------------------

  const allDepartments = [
    "Development",
    "QA",
    "HR",
    "Design",
    "Support",
    "Management",
    "Finance",
    "Marketing",
    "Analytics",
    "Infrastructure",
  ];

  const deptData = allDepartments.map((dept) => ({
    department: dept,
    employees: employees.filter((emp) => emp.department === dept).length,
  }));

  // -------------------------------------------
  // ⭐ RENDER BOTH CHARTS
  // -------------------------------------------

  return (
    <div className="charts-grid">
      {/* ⭐ EMPLOYEE GROWTH CHART */}
      <div className="chart-card">
        <h3>Employee Growth (Jan–Dec)</h3>

        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={growthData}>
            {/* Gradient Styling */}
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            {/* Animated Line */}
            <Line
              type="monotone"
              dataKey="employees"
              stroke="url(#growthGradient)"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
              animationDuration={1300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ⭐ EMPLOYEES BY DEPARTMENT */}
      <div className="chart-card">
        <h3>Employees by Department</h3>

        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={deptData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="department"
              angle={-30}
              textAnchor="end"
              interval={0}
              height={60} // important for long names
            />

            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="employees" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
