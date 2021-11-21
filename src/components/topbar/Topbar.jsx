import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        // class topbar & active. active, buat keperluan animasi hamburger
        // jgn lupa diberi spasi di "topbar "
        // jika menuOpen is true, maka active. 
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+82 811 3600 816</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>aditya@genius.com</span>
                    </div>
                </div>
                <div className="right">
                    {/* jika diklik akan merubah setMenuOpen yg defaultnya useState(true), menjadi kebalikan menuOpen yg true juga menjadi [false] */}
                    {/* onClick buat keperluan animasi hamburger */}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
