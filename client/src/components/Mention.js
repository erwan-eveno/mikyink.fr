import {gsap} from "gsap/dist/gsap";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Mentions (){
    useEffect(()=>{
        gsap.to(window, {
            duration: .3,
            scrollTo: '#top'
        })
    })

    let cusorSize = 60

    const moveCursor = (e) => {
        gsap.to(`#cursor`, {
            x: e.nativeEvent.clientX - cusorSize / 2,
            y: e.nativeEvent.clientY - cusorSize / 2,
            duration: .5,
            ease: "expo.inout"
        })
    }

    const smallHover = () => {
        cusorSize = 16
        gsap.to("#cursor", {
            width: 16,
            height: 16,
            backgroundColor: 'rgba(255,255,255,.7)',
            border: "2px solid rgba(255,255,255,0)",
        })
    }

    const smallLeave = () => {
        cusorSize = 60
        gsap.to("#cursor", {
            width: 60,
            height: 60,
            backgroundColor: 'rgba(255,255,255,0)',
            border: "2px solid rgba(255,255,255,.6)",
        })
    }

    const cursorHover = () => {
        cusorSize = 45
        gsap.to("#cursor", {
            width: 45,
            height: 45,
            border: '1px solid rgba(255,255,255,0)',
            backgroundColor: 'rgba(255,255,255,.6)',
        })
    }

    const leaveHover = () => {
        cusorSize = 60
        gsap.to("#cursor", {
            width: 60,
            height: 60,
            border: "2px solid rgba(255,255,255,.6)",
            backgroundColor: 'rgba(255,255,255,0)',
        })
    }

    return (
        <div className="bg-primary w-full select-none" onMouseMove={moveCursor} id="top">
            <div id="cursor" className="fixed rounded-[30px] block w-[60px] h-[60px] border-white border-[1px] z-[100] pointer-events-none"/>
            <div className="flexcenter">
                <div className="h-[100px] w-[80%] mt-12 border-customWhite border border-2 flex justify-between">
                    <Link to="/" className="w-1/5 h-full border-r-customWhite border-r-2 text-customWhite flexcenter text-xl font-josefin" onMouseEnter={cursorHover} onMouseLeave={leaveHover}>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <span className="ml-3">Retour</span>
                    </Link>
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="./icon.png" alt="" onMouseEnter={cursorHover} onMouseLeave={leaveHover} />
                        </Link>
                    </div>
                    <div className="w-1/5 h-full border-l-customWhite border-l-2 flexcenter" onMouseEnter={smallHover} onMouseLeave={smallLeave}>
                        <a href="https://www.facebook.com/Mikyink.tatouage/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} className="text-white text-[30px]" />
                        </a>
                        <a href="https://www.instagram.com/miky_ink_/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="text-white text-[30px] ml-8" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-[40%] mt-14 ml-[10%]">
                <h1 className="text-customWhite font-josefin text-3xl">Mentions légales</h1>
                <div className="bg-customWhite h-1 mt-3 w-full" />
            </div>
            <div className="w-[80%] ml-[10%] mt-14 text-customWhite pb-32">
                <h2 className="font-josefin text-xl font-medium">Edition du site internet</h2>
                <br /><br />
                Le site Mikyink.fr (ci-après « le Site »), accessible à l’adresse https://mikyink.fr est édité par la société Mikyink (ci-après « l’Editeur »), SAS au capital de 5000 euros, dont le siège social est situé xxxxxx (num, contact@mikyink.fr).
                <br /><br />
                <br /><br />

                <h2 className="font-josefin text-xl font-medium">Rédaction du site internet</h2>
                <br /><br />
                Directeur de la publication : Erwan EVENO, développeur web full-stack<br />
                Site web : <a href="https://erwan-eveno.fr" target="_blank" className="text-blue-400" onMouseEnter={smallHover} onMouseLeave={smallLeave}>https://erwan-eveno.fr</a><br />
                Contact : 07 87 25 56 21 ; contact@erwan-eveno.fr<br />
                <br /><br />
                <br /><br />

                <h2 className="font-josefin text-xl font-medium">Hébergeur du site internet</h2>
                <br /><br />
                Le site Mikyink.fr est hébergé par HOSTINGER, dont le siège social est situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen suivant : <a href="https://www.hostinger.fr/contact" target="_blank" className="text-blue-400" onMouseEnter={smallHover} onMouseLeave={smallLeave}>https://www.hostinger.fr/contact</a>.
                <br /><br />
                <br /><br />

                <h2 className="font-josefin text-xl font-medium">Respect de la propriété intellectuelle</h2>
                <br /><br />
                Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site et plus généralement tous les éléments reproduits ou utilisés sur le Site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.
                <br /><br />
                Ils sont la propriété pleine et entière de l’Editeur ou de ses partenaires, sauf mentions particulières. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l’accord préalable et écrit de l’Editeur, sont strictement interdites. Le fait pour l’Editeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.
                <br /><br />
                Seule l’utilisation pour un usage privé dans un cercle de famille est autorisée et toute autre utilisation est constitutive de contrefaçon et/ou d’atteinte aux droits voisins, sanctionnées par Code de la propriété intellectuelle.
                <br /><br />
                La reprise de tout ou partie de ce contenu nécessite l’autorisation préalable de l’Editeur ou du titulaire des droits sur ce contenu.
                <br /><br />
                <br /><br />
                <h2 className="font-josefin text-xl font-medium">Liens hypertextes</h2>
                <br /><br />
                Le Site peut contenir des liens hypertexte donnant accès à d’autres sites web édités et gérés par des tiers et non par l’Editeur. L’Editeur ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales.
                <br /><br />
                La création de liens hypertexte vers le Site ne peut être faite qu’avec l’autorisation écrite et préalable de l’Editeur.
            </div>
        </div>
    )
}