// Home page
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Searchbar from "../components/Searchbar";
import List from "../components/List";


function Home({user}: any) {
  return (
    <div className="w-full">
      {/* Header */}
      <Header user={user} />

      {/* Hero Section */}
      <HeroSection />

      {/* Searchbar and Filter Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 mt-10">
        <Searchbar />
        <button className="bg-white text-gray-800 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 text-sm w-full sm:w-auto">
          Filter
        </button>
      </div>

      {/* Scholarship List */}
      <List />
    </div>
  );
}

export default Home;
