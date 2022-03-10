import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar (props){
    return (
        <div onMouseEnter={props.enter} onMouseLeave={props.leave}>
            <div className="hidden z-50 md:flex justify-center linearBg md:h-screen md:w-[100px] fixed shadow-navShadow">
                <div className="absolute top-7">
                    <img src="./icon.png" alt="" />
                </div>
                <div className="flex justify-center flex-col">
                    <ul className="h-[35%] lg:h-[25%] flex flex-col justify-between">
                        <li onClick={(e)=>props.sectionSwipe("home")} className="p-2">
                            <div id="homeNav" className="navBtns bg-white w-5 h-5 rotate-45 rounded" />
                        </li>
                        <li onClick={(e)=>props.sectionSwipe("services")} className="p-2">
                            <div id="servicesNav" className="navBtns bg-white w-5 h-5 rounded-xl opacity-40" />
                        </li>
                        <li onClick={(e)=>props.sectionSwipe("artbook")} className="p-2">
                            <div id="artbookNav" className="navBtns bg-white w-5 h-5 rounded-xl opacity-40" />
                        </li>
                        <li onClick={(e)=>props.sectionSwipe("contact")} className="p-2">
                            <div id="contactNav" className="navBtns bg-white w-5 h-5 rounded-xl opacity-40" />
                        </li>
                    </ul>
                </div>
                <div className="absolute bottom-[7%] h-[15%] lg:h-[10%] flex flex-col justify-between">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white text-[30px]" />
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-[30px]" />
                </div>
            </div>
        </div>
    )
}