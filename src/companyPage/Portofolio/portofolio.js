import "./portofolio.css"
import Vinding from "./Portofolio/vinding/vinding"
import Reveiw from "./Portofolio/reveiw/reveiw"

function Portofolio() {
    return (
        <div className="container-Portofolio">
            <div>
                <h1 className="header-Portofolio">Portofolio</h1>
                <button className="btn-portofolio bg-darkblue text-white">Client</button>
                <button className="btn-portofolio">Platform</button>
                <button className="btn-portofolio">Design</button>
                <Vinding />
            </div>
            <Reveiw />

            <button className="vinding-button">Show More</button>
        </div>
    )
}

export default Portofolio