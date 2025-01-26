const List = () => {
  const scholarships = [
    {
      title: "GREP Programe",
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
    <main className="mx-auto mt-8 flex w-full max-w-screen-lg flex-col gap-4 mb-30">
      {scholarships.map((scholarship) => (
        <a
          key={scholarship.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          href={scholarship.websiteUrl}
          className="flex flex-col cursor-pointer space-y-2 rounded-lg border bg-white p-4 hover:bg-gray-50"
        >
          <div className="flex items-center space-x-4">
            <img
              src={scholarship.logoUrl}
              className="h-12 w-12 rounded border object-contain p-1"
              alt={`Logo ${scholarship.title}`}
            />
            <div className="flex flex-col">
              <p className="font-semibold">
                {scholarship.title} by {scholarship.sponsor}
              </p>
              <p className="text-sm text-gray-500">{scholarship.description}</p>
              <p className="text-sm text-gray-500">
                Last Date to Apply: {scholarship.dateApplication}
              </p>
            </div>
          </div>

          {/* Chips Section */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {/* Status Chip */}
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
