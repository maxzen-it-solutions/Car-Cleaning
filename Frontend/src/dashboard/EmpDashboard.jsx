// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import EmployeeSidebar from "./EmployeeSidebar";

// export default function EmpDashboard() {
//   const email = localStorage.getItem("email");
//   const role = localStorage.getItem("role");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (role !== "employee") {
//       navigate("/"); // redirect others to homepage
//     }
//   }, [role, navigate]);

//   return (
//       <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <EmployeeSidebar />

//       {/* Main content */}
//       <div className="flex-1 flex flex-col">
//         {/* Top Navbar */}
//         <header className="bg-yellow-500 p-4 flex justify-between items-center shadow">
//           <h1 className="text-lg font-bold text-black">Employee</h1>
//           <div className="text-sm text-black">
//             {email} ({role})




//           </div>
//         </header>

//         {/* Dashboard Cards */}
//         <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h2 className="text-xl font-semibold mb-4">My Profile</h2>
//             <p><span className="font-semibold">Email:</span> {email}</p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h2 className="text-xl font-semibold mb-4">Attendance</h2>
//             <p>Today: <span className="text-green-600 font-bold">Present ✅</span></p>
//           </div>
//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h2 className="text-xl font-semibold mb-4">My Tasks</h2>
//             <p>3 pending tasks</p>
//           </div>
//         </main>
//       </div>
//     </div>

//   );
// }


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar";

export default function EmpDashboard() {
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "employee") {
      navigate("/"); // redirect others to homepage
    }
  }, [role, navigate]);

  return (
  <div className="flex flex-col lg:flex-row min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* Sidebar */}
      <EmployeeSidebar />

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Employee <span className="text-[#FFD700]">Dashboard</span>
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-xl shadow text-center">
            <h4 className="text-gray-400">My Profile</h4>
            <p className="text-sm sm:text-base mt-2">
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-xl shadow text-center">
            <h4 className="text-gray-400">Attendance</h4>
            <p className="text-lg sm:text-xl font-bold text-green-500 mt-2">
              Present ✅
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-xl shadow text-center">
            <h4 className="text-gray-400">My Tasks</h4>
            <p className="text-lg sm:text-xl font-bold text-[#FFD700] mt-2">
              3 Pending
            </p>
          </div>
        </div>

        {/* Assigned Leads Section */}
        {/* <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-xl shadow overflow-x-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Assigned Leads
          </h2>
          <table className="w-full text-xs sm:text-sm text-left min-w-[600px]">
            <thead className="text-gray-400 border-b border-gray-600">
              <tr>
                <th className="py-2 px-3 sm:px-4">Lead Name</th>
                <th className="py-2 px-3 sm:px-4">Email</th>
                <th className="py-2 px-3 sm:px-4">Phone</th>
                <th className="py-2 px-3 sm:px-4">Address</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { name: "John Doe", email: "john@example.com", phone: "1234567890", address: "New York" },
                { name: "Jane Smith", email: "jane@example.com", phone: "9876543210", address: "California" },
              ].map((lead, idx) => (
                <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="py-2 px-3 sm:px-4">{lead.name}</td>
                  <td className="py-2 px-3 sm:px-4">{lead.email}</td>
                  <td className="py-2 px-3 sm:px-4">{lead.phone}</td>
                  <td className="py-2 px-3 sm:px-4">{lead.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </main>
    </div>
);

}
