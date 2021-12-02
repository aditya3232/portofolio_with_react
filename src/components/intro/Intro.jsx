import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    // useRef fungsinya seperti document.querySelector() [memilih elemen]
    const textRef = useRef();

    // ityped
    // useEffect akan menerapkan animasi ityped
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
                
            <div className="right">
                <div className="wrappper">
                    <h2>Hi There, I'm</h2>
                    <h1>Muhammad Aditya</h1>
                    {/* elemen h3 menerapkan animasi ityped */}
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
