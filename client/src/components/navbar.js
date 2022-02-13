import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar (){
    return (
        <>
            <div className="hidden z-50 md:flex justify-center bg-gradient-to-b from-primary to-primaryGradient md:h-screen md:w-[100px] fixed shadow-navShadow">
                <div className="absolute top-7">
                    <img src="./icon.png" alt="" />
                </div>
                <div className="flex justify-center flex-col">
                    <ul className="h-[35%] lg:h-[25%] flex flex-col justify-between">
                        <li className="bg-white w-5 h-5 rounded-xl opacity-40 cursor-pointer" />
                        <li className="bg-white w-5 h-5 rounded-xl opacity-40 cursor-pointer" />
                        <li className="bg-white w-5 h-5 rounded-xl opacity-40 cursor-pointer" />
                        <li className="bg-white w-5 h-5 rounded-xl opacity-40 cursor-pointer" />
                    </ul>
                </div>
                <div className="absolute bottom-[7%] h-[15%] lg:h-[10%] flex flex-col justify-between">
                    <FontAwesomeIcon icon={faFacebookF} className="text-white text-[30px]" />
                    <FontAwesomeIcon icon={faInstagram} className="text-white text-[30px]" />
                </div>
            </div>
        </>
    )
}