import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {

    // jiks list diselect akan aktif.
    const [selected, setSelected] = useState("featured");

    // list (li) untuk (ul) Portfolio
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item}
                    />
                ))}
            </ul>
            {/* container portfolio items */}
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
