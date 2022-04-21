import {useEffect} from "react";
import {gsap} from "gsap/dist/gsap";

export default function Loader (){
    useEffect(()=>{
        const tlLoad = gsap.timeline()

        tlLoad.to('body', {
            overflow: "hidden",
            duration: 5
        }).to('.loadingscreen', {
            duration: .7,
            x: '100%'
        }).to('body', {
            overflow: "visible"
        })
    }, [])

    return (
        <div className="loadingscreen bg-primaryGradient h-screen w-screen block fixed pointer-events-none flexcenter z-[9999]">
            <div className="flex flex-col items-center">
                <h1 className="loaderh1 tracking-widest text-6xl" data-text="MIKYINK">MIKYINK</h1>
                <h2 className="font-sourceSans mt-3 text-xl text-customWhite opacity-90">tattoo • piercing</h2>
            </div>
        </div>
    )
}