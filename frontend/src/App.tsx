import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

// TODO: Have to persist the data somehow
const AuthContext = createContext(null);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  
  return (
    <AuthContext.Provider value={currentUser}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/login" element={<Login setUser={setCurrentUser} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile user={currentUser} />} />
        {/* <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>
  );

//   const [filter, setFilter] = useState<{ status: string; category: string }>({
//     status: "",
//     category: "",
//   });

//   const filteredScholarships = scholarships.filter((scholarship) => {
//     const matchesStatus =
//       !filter.status || scholarship.status === filter.status;
  
//     const matchesCategory =
//       !filter.category || scholarship.categories.includes(filter.category);
  
//     return matchesStatus && matchesCategory;
//   });
  
//   const handleFilterChange = (type: "status" | "category", value: string) => {
//   setFilter((prev) => ({ ...prev, [type]: value }));
// };

  
// return (
//   <div className="w-full">
//     {/* Header */}
//     <Header />

//     {/* Hero Section */}
//     <HeroSection />

 

//     {/* Filter UI */}
//     <div className="flex flex-col sm:flex-row gap-4 mt-4 px-5">
//       {/* Status Filter */}
//       <div>
//         <label className="block text-sm font-semibold">Status:</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
//           onChange={(e) => handleFilterChange("status", e.target.value)}
//           value={filter.status}
//         >
//           <option value="">All</option>
//           <option value="Open">Open</option>
//           <option value="Closed">Closed</option>
//         </select>
//       </div>

//       {/* Category Filter */}
//       <div>
//         <label className="block text-sm font-semibold">Category:</label>
//         <select
//           className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
//           onChange={(e) => handleFilterChange("category", e.target.value)}
//           value={filter.category}
//         >
//           <option value="">All</option>
//           <option value="Study Local">Study Local</option>
//           <option value="Postgraduate">Postgraduate</option>
//           <option value="Engineering">Engineering</option>
//         </select>
//       </div>
//     </div>

//     {/* Scholarship List */}
//     <List scholarships={filteredScholarships} />
//   </div>
// );

}

export default App;
