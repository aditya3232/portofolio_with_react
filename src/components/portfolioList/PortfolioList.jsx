import "./portfolioList.scss"

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portfoliolist active" : "portfolioList"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}
