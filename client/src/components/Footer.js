export default function Footer (props){
    const frenchDays = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    let date = new Date()

    let formatedDate = frenchDays[date.getDay() - 1] + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)

    return (
        <div className="linearBg h-[400px] w-full flex flex-col items-center" id="contact">
            <div className="w-[90%] lg:w-[85%] xl:w-[75%] text-customWhite flex justify-between font-josefin mt-10 h-full relative">
                <div className="hidden lg:block">
                    <h1 className="text-xl">plan du site</h1>
                    <ul className="font-light mt-6" onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave}>
                        <li className="mt-3 text-lg w-[90%]">home</li>
                        <li className="mt-3 text-lg w-[90%]">services</li>
                        <li className="mt-3 text-lg w-[90%]">artbook</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl">contact</h1>
                    <ul className="font-light mt-6" onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave}>
                        <li className="mt-3 text-lg w-[90%]">1 square pierre magnol, 81580 soual</li>
                        <li className="mt-3 text-lg w-[90%]">06 37 36 84 95</li>
                        <li className="mt-3 text-lg w-[90%]">hello@mikyink.fr</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl">horaires</h1>
                    <ul className="font-light mt-6">
                        <li className="mt-3 text-lg w-[90%]">Lun / Dim: fermé</li>
                        <li className="mt-3 text-lg w-[90%]">Mar / Sam: 09h - 18h</li>
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
                <h1 onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave} className="absolute md:left-0 tracking-wider text-sm sm:text-lg">© Mikyink.fr | Site développé par Erwan EVENO</h1>
                <h1 className="hidden md:block absolute right-0">{formatedDate}</h1>
            </div>
        </div>
    )
}