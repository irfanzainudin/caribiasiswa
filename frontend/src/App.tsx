import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import List from "./components/List";

import { scholarships } from "./constants/data";
import { Scholarship } from "./constants/data"; // Import the type


function App() {

  const [filter, setFilter] = useState<{ status: string; category: string }>({
    status: "",
    category: "",
  });

  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesStatus =
      !filter.status || scholarship.status === filter.status;
  
    const matchesCategory =
      !filter.category || scholarship.categories.includes(filter.category);
  
    return matchesStatus && matchesCategory;
  });
  
  const handleFilterChange = (type: "status" | "category", value: string) => {
  setFilter((prev) => ({ ...prev, [type]: value }));
};

  
return (
  <div className="w-full">
    {/* Header */}
    <Header />

    {/* Hero Section */}
    <HeroSection />

 

    {/* Filter UI */}
    <div className="flex flex-col sm:flex-row gap-4 mt-4 px-5">
      {/* Status Filter */}
      <div>
        <label className="block text-sm font-semibold">Status:</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
          onChange={(e) => handleFilterChange("status", e.target.value)}
          value={filter.status}
        >
          <option value="">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-semibold">Category:</label>
        <select
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm"
          onChange={(e) => handleFilterChange("category", e.target.value)}
          value={filter.category}
        >
          <option value="">All</option>
          <option value="Study Local">Study Local</option>
          <option value="Postgraduate">Postgraduate</option>
          <option value="Engineering">Engineering</option>
        </select>
      </div>
    </div>

    {/* Scholarship List */}
    <List scholarships={filteredScholarships} />
  </div>
);

}

export default App;
