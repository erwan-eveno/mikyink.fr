import {gsap} from "gsap/dist/gsap";

export default function HeroNavbar (props){
    const links = ['services', 'artbook', 'contact']

    return (
        <>
            <div className="absolute md:right-[50px] lg:right-[100px] top-[50px] hidden md:block md:w-[600px] lg:w-[700px] 2xl:right-[150px] 2x:w-[800px] z-50">
                <ul className="flex w-full justify-between text-white">
                    {links.map((x, key)=>{
                        return <li className="text-[30px] tracking-widest font-light font-josefin uppercase" onMouseEnter={props.linkEnter} onMouseLeave={props.linkLeave} onClick={()=>props.navScroll(x)} key={key}>{x}</li>
                    })}
                </ul>
            </div>
        </>
    )
}