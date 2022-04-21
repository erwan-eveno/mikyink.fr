import { useState} from "react";
import {gsap} from "gsap/dist/gsap"

export default function HeroMobile () {
    const [isOpen, setIsOpen] = useState(false)

    const openNav = async () => {
        gsap.to("#mobileNav", {
            x: isOpen ? 0 : '-100%',
            duration: .5,
            ease: 'power1'
        })
        gsap.to('body', {
            overflow: isOpen ? 'visible' : 'hidden'
        })
        setIsOpen(!isOpen)
    }

    const linkHandler = (tab) =>{
        openNav()
        gsap.to(window, {
            scrollTo: `#${tab}`,
            duration: .5
        })
    }

    return (
        <>
            <div className="md:hidden relative z-50" onClick={openNav}>
                <div className="bg-customWhite w-[70px] h-[70px] absolute right-10 top-10 flexcenter cursor-pointer btnMobile">
                    <span />
                </div>
            </div>

            <div className="md:hidden flexcenter h-full">
                <div className="flex flex-col items-center">
                    <img src="icon.png" className="self-center" alt="" />
                    <h1 className="text-customWhite font-roboto text-[60px] mt-5 font-light ">MikyInk</h1>
                    <span className="h-[2px] w-full bg-customWhite block mt-5" />
                    <h2 className="mt-5 text-customWhite font-josefin text-[25px] tracking-wider">Tattoo • Piercing</h2>
                </div>
            </div>

            <div className="w-full h-screen bg-gradient-to-b from-primary to-primaryGradient md:hidden fixed top-0 left-full flex items-center flex-col z-40" id="mobileNav">
                <div className="absolute top-10">
                    <img src="./icon.png" alt="" />
                </div>
                <div className="flexcenter h-full w-full">
                    <ul className="text-customWhite font-roboto text-[20px] items-center flex-col flex h-[30%] justify-between">
                        <li onClick={()=>linkHandler('home')}>HOME</li>
                        <li onClick={()=>linkHandler('services')}>SERVICES</li>
                        <li onClick={()=>linkHandler('artbook')}>ARTBOOK</li>
                        <li onClick={()=>linkHandler('contact')}>CONTACT</li>
                    </ul>
                </div>
                <div className="absolute bottom-10 flex w-[20%] justify-between">
                    <a href="https://www.facebook.com/Mikyink.tatouage/" target="_blank" className="flexcenter">
                        <img src="fb.png" alt="facebook" className="h-8" />
                    </a>
                    <a href="https://www.instagram.com/miky_ink_/" target="_blank" className="flexcenter">
                        <img src="insta.png" alt="instagram" className="h-8" />
                    </a>
                </div>
            </div>
        </>
    )
}