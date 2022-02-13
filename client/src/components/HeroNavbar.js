export default function HeroNavbar (){
    return (
        <>
            <div className="absolute md:right-[50px] lg:right-[100px] top-[50px] hidden md:block md:w-[600px] lg:w-[700px] 2xl:right-[150px] 2x:w-[800px]">
                <ul className="flex w-full justify-between text-white">
                    <li className="text-[30px] tracking-wider font-light font-roboto uppercase">HOME</li>
                    <li className="text-[30px] tracking-wider font-light font-roboto uppercase">SERVICES</li>
                    <li className="text-[30px] tracking-wider font-light font-roboto uppercase">ARTBOOK</li>
                    <li className="text-[30px] tracking-wider font-light font-roboto uppercase">CONTACT</li>
                </ul>
            </div>
        </>
    )
}