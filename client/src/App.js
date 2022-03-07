/* COMPONENTS */
import {useEffect} from "react";
import Navbar from './components/navbar'
import HeroNavbar from "./components/HeroNavbar";
import HeroMobile from "./components/HeroMobile";
import {gsap} from "gsap/dist/gsap";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Services from "./components/Services";
import Artbook from "./components/Artbook";
import Footer from "./components/Footer"

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.registerPlugin(ScrollTrigger)

        /*gsap.to(".abcd", {
          scrollTrigger: {
            trigger: "#artbook"
            //start: "test"+ab()
          }
        })*/
    }, [])

    let cusorSize = 60

    const moveCursor = (e) => {
        gsap.to(`#cursor`, {
            x: e.nativeEvent.clientX - cusorSize / 2,
            y: e.nativeEvent.clientY - cusorSize / 2,
            duration: .5,
            ease: "expo.inout"
        })
    }

    const smallHover = () => {
        cusorSize = 16
        gsap.to("#cursor", {
            width: 16,
            height: 16,
            backgroundColor: 'rgba(255,255,255,.7)',
            border: "2px solid rgba(255,255,255,0)",
        })
    }

    const smallLeave = () => {
        cusorSize = 60
        gsap.to("#cursor", {
            width: 60,
            height: 60,
            backgroundColor: 'rgba(255,255,255,0)',
            border: "2px solid rgba(255,255,255,.6)",
        })
    }

    const cursorHover = () => {
        cusorSize = 45
        gsap.to("#cursor", {
            width: 45,
            height: 45,
            border: '1px solid rgba(255,255,255,0)',
            backgroundColor: 'rgba(255,255,255,.6)',
        })
    }

    const leaveHover = () => {
        cusorSize = 60
        gsap.to("#cursor", {
            width: 60,
            height: 60,
            border: "2px solid rgba(255,255,255,.6)",
            backgroundColor: 'rgba(255,255,255,0)',
        })
    }

    const sectionSwipe = (e, tab) => {
        gsap.to(`.navBtns`, {rotation: 0, opacity: .4, borderRadius: 10, duration: .5})
        gsap.to(e.target, {rotation: 45, opacity: 1, borderRadius: 2, duration: .5})
        gsap.to(window, {duration: .5, scrollTo: `#${tab}`});
    }

    return (
        <div onMouseMove={moveCursor} className="select-none">
            <div id="cursor" className="fixed rounded-[30px] block w-[60px] h-[60px] border-white border-[1px] z-[100] pointer-events-none"/>
            <Navbar enter={smallHover} leave={smallLeave} sectionSwipe={sectionSwipe} />
            <div className="absolute left-0 md:left-[100px] md:top-0 overflow-hidden centerCalc">
                <div className="h-screen w-full overflow-hidden bg-center bg-cover bg-no-repeat"
                     style={{backgroundImage: 'url(bgHero.png'}} id="home">
                    <HeroNavbar linkEnter={cursorHover} linkLeave={leaveHover} />
                    <div className="hidden md:block">
                        <div className="flex absolute h-screen w-full items-center">
                            <img src="heroText.png" alt="" className="absolute"/>
                        </div>
                    </div>
                    <HeroMobile />
                </div>

                <Services enterHover={cursorHover} leaveHover={leaveHover} smallHover={smallHover} smallLeave={smallLeave} />

                <Artbook enterHover={cursorHover} leaveHover={leaveHover} />

                <Footer />
            </div>
        </div>
    )
}

export default App;
