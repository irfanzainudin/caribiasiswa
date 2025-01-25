import Header from "./components/Header"
import HeroSection from "./components/heroSection"
import Searchbar from "./components/Searchbar"
import List from "./components/List"


function App() {

  return (
    <>
    <Header/>
       <HeroSection/>
       <div className="mx-50 px-5 justify-center">
        <Searchbar className="bg-slate-400"/>
       </div>
       <List/>

    </>
  )
}

export default App
