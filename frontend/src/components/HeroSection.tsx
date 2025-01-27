
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-4 sm:py-20 sm:px-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-opacity-70 bg-blue-900"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col items-center text-center space-y-6">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
          Bridging the Gap to Opportunity
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-2xl px-2 sm:px-0">
          Empowering students from every background by listing scholarships for
          local and global studies.
        </p>

        {/* Call-to-Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 w-full sm:w-auto">
            Explore Scholarships
          </button>
          <button className="bg-blue-700 border border-white px-6 py-3 rounded-lg hover:bg-blue-600 w-full sm:w-auto">
            Learn More
          </button>
        </div>

        {/* Storytelling */}
        <p className="mt-6 text-xs sm:text-sm text-blue-200 px-4 sm:px-0">
          "Scholarships aren't just for the privileged—they are the stepping
          stones for those who need them the most. Let's change the narrative."
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
