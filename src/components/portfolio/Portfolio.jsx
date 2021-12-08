import { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";


export default function Portfolio() {

    // jiks list diselect akan aktif.
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

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
    
    // menggunakan efek yg akan setData ketika diklik
    useEffect(()=>{

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default: 
                setData(featuredPortfolio);    
        }

    },[selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id}
                    />
                ))}
            </ul>
            {/* container portfolio items */}
            <div className="container">
                {/* foreach data */}
                {data.map((d)=> (

                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>

                ))}
            </div>
        </div>
    )
}
