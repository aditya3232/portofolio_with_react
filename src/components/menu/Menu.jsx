import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) { //ada props disini
    return (
        // jika menuOpen true maka aktif. nilai default menuOpen udah diatur true di App.jsx
        <div className={"menu "+(menuOpen && "active")}> 
            <ul>
                {/* list disini akan menutup jika diklik */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testiomonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
