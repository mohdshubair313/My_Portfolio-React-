import React from "react"
import {BiHomeAlt, BiUser} from "react-icons/bi"
import {BsClipboard2Data, BsBriefcase, BsChatSquareText} from "react-icons/bs"
import {Link} from 'react-scroll'

export default function Nav() {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[96px] backdrop:blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
                <Link activeClass="active" smooth={true} spy={true} to="home" className="navButtons offset={-200}">
                 <BiHomeAlt /> 
                </Link>
                <Link activeClass="active" smooth={true} spy={true} to="About" className="navButtons">
                 <BiUser /> 
                </Link>
                <Link activeClass="active" smooth={true} spy={true} to="Projects" className="navButtons">
                 <BsClipboard2Data /> 
                </Link>
                <Link activeClass="active" smooth={true} spy={true} to="work" className="navButtons">
                 <BsBriefcase /> 
                </Link>
                <Link activeClass="active" smooth={true} spy={true} to="contact" className="navButtons">
                 <BsChatSquareText /> 
                </Link> 
                </div>
            </div>
        </nav>
    )
}