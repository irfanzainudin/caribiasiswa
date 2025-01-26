const List = () => {
  const scholarships = [
    {
      title: "GREP Programme",
      sponsor: "MARA",
      description:
        "Graduate Excellence Programme 2020. In empowering the nation's human capital capacity, MARA is offering postgraduate courses to excellent graduates at many leading institutions in the world",
      dateApplication: "17 October 2020",
      websiteUrl: "https://www.mara.gov.my/en/grep-count-down-bi/",
      logoUrl: "https://mara.b-cdn.net/wp-content/uploads/2019/05/logo.png",
      status: "Closed", // Added status
      categories: ["Study Abroad", "Postgraduate"], // Added categories
    },
    {
      title: "Kijang Scholarship 2024",
      sponsor: "Bank Negara Malaysia",
      description:
        "The Kijang Scholarship is awarded to eligible individuals to pursue pre-university programmes at BNM's approved pre-university colleges. This scholarship provides tuition fees, subsistence allowance, as well as related scholarship allowances.",
      dateApplication: "1 December 2024",
      websiteUrl: "https://www.bnm.gov.my/careers/scholarships",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-lZoVibARjViX2ArMMzqzrDyK4xGbaQ_hg&s",
      status: "Open",
      categories: ["Study Local", "Finance"],
    },
    // Add more scholarships here if needed
  ];

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
              src={scholarship.logoUrl}
              className="h-16 w-16 rounded border object-contain p-2 mx-auto sm:mx-0"
              alt={`Logo ${scholarship.title}`}
            />
            <div className="flex flex-col text-center sm:text-left">
              <p className="text-lg font-semibold">{scholarship.title}</p>
              <p className="text-sm text-gray-600">{scholarship.sponsor}</p>
            </div>
          </div>

          {/* Description and Date */}
          <div className="text-sm text-gray-700 mt-2 sm:mt-0">
            <p>{scholarship.description}</p>
            <p className="text-gray-500">
              <strong>Last Date to Apply:</strong> {scholarship.dateApplication}
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
