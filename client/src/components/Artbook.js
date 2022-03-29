import {Link} from "react-router-dom";

export default function Artbook (props) {
    const imgs = [{name:'a', ext:'jpg'}, {name:'b', ext: 'png'}, {name:'c', ext: 'png'}, {name:'d', ext: 'png'}, {name:'e', ext: 'png'}, {name:'f', ext: 'png'}, {name:'g', ext: 'jpg'}, {name:'h', ext: 'png'}, {name:'i', ext: 'png'}]

    return (
        <div id="artbook" className="w-full h-screen bg-center bg-no-repeat bg-cover relative min-h-[600px]" style={{backgroundImage: "url('bgArtbook.png')"}}>
            <div className="w-[90%] sm:w-[80%] absolute left-[5%] sm:left-[10%] h-full">
                <div className="flex items-center h-[20%]">
                    <div className="h-0.5 bg-customWhite w-[20%] lg:w-[60%] sm:hidden" />
                    <h1 className="uppercase w-[60%] sm:w-[35%] md:w-[30%] lg:w-[20%] font-roboto text-[27px] xl:text-[35px] text-customWhite flex justify-center">artbook</h1>
                    <div className="h-0.5 bg-customWhite w-[20%] sm:w-[30%] md:w-[40%] lg:w-[60%]" />
                    <div className="hidden sm:flex w-[35%] md:w-[30%] lg:w-[20%] justify-center">
                        <Link to='/showmore'>
                            <div className="inline-flex" onMouseEnter={props.enterHover} onMouseLeave={props.leaveHover}>
                                <img src="eye.png" className="self-center w-auto h-[20px] xl:h-auto" alt=""/>
                                <h2 className="ml-3 xl:ml-5 text-customWhite text-[20px] xl:text-[25px] font-josefin">Voir plus</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[60%] sm:h-[70%] artbookGrid">
                    {imgs.map((x, k)=>{
                        return <div key={k} className={x.name+" flexcenter"}><div className="h-[calc(100%-20px)] w-[calc(100%-20px)] bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${x.name}.${x.ext})`}}/></div>
                    })}
                </div>
                <div className="flexcenter h-[15%] sm:hidden w-full h-24">
                    <Link to='/showmore'>
                        <div className="inline-flex border border-customWhite pl-7 pr-7 pt-3 pb-3" onMouseEnter={props.enterHover} onMouseLeave={props.leaveHover}>
                            <img src="eye.png" className="self-center w-auto h-[17px]" alt=""/>
                            <h2 className="ml-3 text-customWhite text-[20px] font-josefin">Voir plus</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}