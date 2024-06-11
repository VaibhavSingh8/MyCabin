import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";

function Dashboard() {
  return (
    <>
      <div className="mb:4 md:flex justify-between items-center">
        <h1 className="font-semibold text-2xl ml-2 mb-2 md:mb-0 text-[#374151]">
          Dashboard
        </h1>
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
