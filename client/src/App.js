/* COMPONENTS */
import Navbar from './components/navbar'
import HeroNavbar from "./components/HeroNavbar";
import HeroMobile from "./components/HeroMobile";

function App() {
  return (
    <>
      <Navbar />
      <div className="absolute left-0 md:left-[100px] md:top-0 overflow-hidden centerCalc">
        <div className="h-screen w-full overflow-hidden bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(bgHero.png'}}>
            <HeroNavbar />
            <div className="hidden md:block">
                <div>
                    <img src="tattooHero.png" alt="" className="absolute top-[15%]" />
                    <img src="piercingHero.png" alt="" className="absolute top-[35%] -right-20"/>
                </div>
            </div>
        <HeroMobile />
        </div>

          <div className="h-[400px] bg-red-600">

          </div>
      </div>
    </>
  )
}

export default App;
