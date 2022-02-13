export default function HeroMobile () {
    return (
        <>
            <div className="md:hidden relative">
                <div className="bg-customWhite w-[70px] h-[70px] absolute right-10 top-10 flexcenter cursor-pointer btnMobile">
                    <span />
                </div>
            </div>
            <div className="block md:hidden flexcenter h-full">
                <div className="flex flex-col items-center">
                    <img src="icon.png" className="self-center" alt="" />
                    <h1 className="text-customWhite font-roboto text-[60px] mt-5 font-light ">MikyInk</h1>
                    <span className="h-[2px] w-full bg-customWhite block mt-5" />
                    <h2 className="mt-5 text-customWhite font-sourceSans text-[25px] tracking-wider">Tattoo • Piercing</h2>
                </div>
            </div>
        </>
    )
}