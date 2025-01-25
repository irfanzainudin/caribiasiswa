import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Searchbar from "./components/Searchbar"
import List from "./components/List"


function App() {

  return (
    <div className="bg">
    <Header/>
       <HeroSection/>
       <div className="flex items-center justify-between mx-50 px-5 mt-10">
        <Searchbar />
        <button className="bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm">
            Filter
        </button>
      </div>
       <List/>

    </div>
  )
}

export default App
