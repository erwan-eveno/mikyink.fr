import gsap from "gsap/dist/gsap"
import {useEffect} from "react";
import {Linear} from "gsap/gsap-core";
import {Link, useNavigate} from "react-router-dom"

export default function Services (props) {
    const navigate = useNavigate()
    const animTime = 4
    const animDelay = .7

    const services = [
        {name:'tattoo', idText: 'textTattoo', time: 0, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'},
        {name:'piercing', idText: 'textPiercing', time: animTime + animDelay, desc: 'Duis aute irure dolor in reprehenderit in voluptate velit'},
        {name:'design', idText: 'textDesign', time: (animTime + animDelay)*2, desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'}
    ]
    const tlBtns = gsap.timeline({repeat: -1})
    const tlImgs = gsap.timeline({repeat: -1})
    const tlTexts = gsap.timeline({repeat: -1})

    useEffect(()=>{
        tlBtns.to('#tattooBtn', {
            duration: animTime,
            width: '100%',
            ease: Linear.ease
        })
        .to('#tattooBtn', {
            width: 0, duration: animDelay, left: '100%'
        })
        .to('#piercingBtn', {
            duration: animTime,
            width: '100%',
            ease: Linear.ease
        })
        .to('#piercingBtn', {width: 0, duration: animDelay, left: '100%'})
        .to('#designBtn', {
            duration: animTime,
            width: '100%',
            ease: Linear.ease
        })
        .to('#designBtn', {width: 0, duration: animDelay, left: '100%'})

        let zMax = 0

        tlImgs
        .to('#imgPiercing', {duration: animTime})
        .to('#imgPiercing', {
            left: 0,
            duration: animDelay
        })
        .to('#imgPiercing', {duration: animTime})
        .to('#imgDesign', {
            left: 0, duration: animDelay
        })
        .to('#imgPiercing',{
            left: '100%',
            duration: 0,
            zIndex: zMax++
        })
        .to('#imgTattoo',{
            left: '100%',
            duration: 0,
            zIndex: zMax++
        })
        .to('#imgPiercing', {duration: animTime})
        .to('#imgTattoo', {
            left: 0,
            duration: animDelay
        })

        tlTexts.to('#textTattoo', {
            opacity: 1,
            duration: animDelay / 2
        }).to('#textTattoo', {duration: animTime})
        .to('#textTattoo', {
            opacity: 0,
            duration: animDelay / 2
        })
        .to('#textPiercing', {
            opacity: 1,
            duration: animDelay / 2
        }).to('#textTattoo', {duration: animTime})
            .to('#textPiercing', {
                opacity: 0,
                duration: animDelay / 2
            })
        .to('#textDesign', {
            opacity: 1,
            duration: animDelay / 2
        }).to('#textTattoo', {duration: animTime})
            .to('#textDesign', {
                opacity: 0,
                duration: animDelay / 2
            })
    })

    const selectCarou =(time)=>{
        tlBtns.seek(time)
        tlImgs.seek(time)
        tlTexts.seek(time)
    }

    const handleClick = ()=>{
        let t = tlImgs.time()
        let totalAnim = animTime + animDelay
        if(t < totalAnim){
            console.log('tattoo')
        }else if(t < totalAnim * 2){
            console.log('piercing')
        }else if(t > totalAnim * 2){
            console.log('design')
        }

        navigate.to()
    }

    return (
        <div id="services" className="h-[700px] md:h-[300px] lg:h-[400px] xl:h-[500px] linearBg w-full serviceGrid relative">
            <div className="h-[50%] md:h-full flexcenter absolute bottom-0 w-full md:w-[50%] xl:w-[40%]">
                <div className="h-[80%] w-[80%] max-w-[500px] relative overflow-hidden">
                    <div className="imgTattoo h-full w-full absolute" id="imgTattoo" />
                    <div className="imgPiercing h-full w-full absolute left-full" id="imgPiercing" />
                    <div className="imgDesign h-full w-full absolute left-full" id="imgDesign" />
                </div>
            </div>

            <div className="h-[50%] md:h-full w-[80%] md:w-[50%] xl:w-[60%] left-[10%] md:left-[50%] xl:left-[40%] absolute flex items-center">
                <div className="w-auto h-[80%]">
                    <h1 className="sectionTitle">SERVICES</h1>
                    <div className="h-[100px] md:h-[150px] lg:h-[200px]">
                        {services.map((x, k)=>{
                            return <div id={x.idText} className="absolute opacity-0" key={k}>
                                <h1 className="uppercase font-josefin text-3xl lg:text-4xl xl:text-5xl text-customWhite mt-6 lg:mt-6 xl:mt-10">{x.name}</h1>
                                <p className="font-josefin font-light text-customWhite w-[80%] xl:w-[60%] text-xl xl:text-[25px] mt-3 lg:mt-5 h-full descOverflow">{x.desc}</p>
                            </div>
                        })}
                    </div>
                    <Link to='/showmore'><div className="border-2 border-customWhite flexcenter w-full h-12 lg:h-14 font-josefin text-customWhite text-xl lg:text-[25px] font-medium mt-24 md:mt-4 xl:mt-12" onMouseEnter={props.enterHover} onMouseLeave={props.leaveHover} onClick={handleClick}>En savoir plus</div></Link>
                </div>
                <div className="absolute right-[25%] hidden xl:block">
                    <ul className="text-right">
                        {services.map((x, k)=>{
                            return <li key={k} onClick={()=>selectCarou(x.time)} onMouseEnter={props.smallHover} onMouseLeave={props.smallLeave} className="text-customWhite uppercase font-josefin relative servPadding mt-1"><div id={x.name +'Btn'} className="activeServ will-change-transform" />{x.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}