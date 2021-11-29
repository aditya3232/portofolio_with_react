import "./intro.scss"

export default function Intro() {
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
                    <h3>Freelance <span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
