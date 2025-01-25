import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Searchbar from "./components/Searchbar"
import List from "./components/List"


function App() {

  return (
    <>
    <Header/>
       <HeroSection/>
       <div className="mx-50 px-5 justify-center">
        <Searchbar/>
       </div>
       <List/>

    </>
  )
}

export default App
