import { scholarships } from "../constants/data";

import DefLogo from "../constants/def-logo.svg";

const List = () => {


  return (
    <main className="mx-auto mt-8 flex w-full max-w-screen-lg flex-col gap-6 mb-20 px-4">
      {scholarships.map((scholarship) => (
        <a
          key={scholarship.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          href={scholarship.websiteUrl}
          className="flex flex-col cursor-pointer space-y-3 rounded-lg border bg-white p-4 shadow hover:bg-gray-50"
        >
          {/* Top Section with Logo and Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <img
              src={DefLogo}
              className="h-16 w-16 rounded border object-contain p-2 mx-auto sm:mx-0"
              alt={`Logo ${scholarship.title}`}
            />
            <div className="flex flex-col text-center sm:text-left ms-3">
              <p className="text-lg font-semibold">{scholarship.title}</p>
              <p className="text-sm text-gray-600">{scholarship.sponsor}</p>
            </div>
          </div>

          {/* Description and Date */}
          <div className="text-sm text-gray-700 mt-2 sm:mt-0">
            <p>{scholarship.description}</p>
            <p className="text-gray-500">
              <strong>Last Date to Apply:</strong> {scholarship.deadline}
            </p>
          </div>

          {/* Chips Section */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {/* Status Chip */}
            {scholarship.status && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  scholarship.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : scholarship.status === "Closed"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {scholarship.status}
              </span>
            )}

            {/* Category Chips */}
            {scholarship.categories.map((category, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {category}
              </span>
            ))}
          </div>
        </a>
      ))}
    </main>
  );
};

export default List;
