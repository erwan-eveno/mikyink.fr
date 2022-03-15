import {useEffect, useState} from "react";

export default function Footer (props){
    const [formatedDate, setFormatedDate] = useState('')

    const frenchDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    let date = new Date()

    let finalDate = frenchDays[date.getDay() - 1] + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
    useEffect(()=>{
        setFormatedDate(frenchDays[date.getDay() - 1] + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2))
        setInterval(()=>{
            date = new Date()
            setFormatedDate(frenchDays[date.getDay() - 1] + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2))
        }, 5000)
    }, [])

    return (
        <div className="linearBg h-[400px] w-full flex flex-col items-center" id="contact">
            <div className="w-[90%] lg:w-[85%] xl:w-[75%] text-customWhite flex justify-between font-josefin mt-10 h-full relative">
                <div className="hidden lg:block">
                    <h1 className="text-xl">plan du site</h1>
                    <ul className="font-light mt-6" onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave}>
                        <li className="mt-3 text-lg w-[90%]" onClick={()=>props.navScroll('home')}>home</li>
                        <li className="mt-3 text-lg w-[90%]" onClick={()=>props.navScroll('services')}>services</li>
                        <li className="mt-3 text-lg w-[90%]" onClick={()=>props.navScroll('artbook')}>artbook</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl">contact</h1>
                    <ul className="font-light mt-6" onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave}>
                        <li className="mt-3 text-lg w-[90%]"><a href="https://www.google.com/maps/place/Tattoo+Shop+Sower+Ink/@43.5542154,2.1156358,3a,75y,97.45h,83t/data=!3m6!1e1!3m4!1sqcTfvc1k8HQhcRJTnh3cnQ!2e0!7i16384!8i8192!4m8!1m2!2m1!1s1+square+pierre+magnol+soual!3m4!1s0x12ae6c91de6c6c6f:0x33c4e4fa98b8367c!8m2!3d43.5542327!4d2.1160692" target="_blank">1 square pierre magnol, 81580 soual</a></li>
                        <li className="mt-3 text-lg w-[90%]"><a href="tel:06-37-36-84-95">06 37 36 84 95</a></li>
                        <li className="mt-3 text-lg w-[90%]"><a href="mailto:hello@mikyink.fr">hello@mikyink.fr</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl">horaires</h1>
                    <ul className="font-light mt-6">
                        <li className="mt-3 text-lg w-[90%]">Lun: fermé</li>
                        <li className="mt-3 text-lg w-[90%]">Mar / Sam: 09h - 18h</li>
                        <li className="mt-3 text-lg w-[90%]">Dim: fermé</li>
                    </ul>
                </div>
                <div className="hidden sm:block">
                    <h1 className="text-xl">autre</h1>
                    <ul className="font-light mt-6" onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave}>
                        <li className="mt-3 text-lg w-[90%]">Mentions légales</li>
                        <li className="mt-3 text-lg w-[90%]">Politique de confidentialité</li>
                    </ul>
                </div>
            </div>
            <div className="w-[75%] text-customWhite flex justify-center md:justify-center relative absolute bottom-16 font-josefin font-medium">
                <h1 onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave} className="absolute md:left-0 tracking-wider text-sm sm:text-lg"><a href="https://erwan-eveno.fr/" target="_blank">© Mikyink.fr | Site développé par Erwan EVENO</a></h1>
                <h1 className="hidden md:block absolute right-0">{formatedDate}</h1>
            </div>
        </div>
    )
}