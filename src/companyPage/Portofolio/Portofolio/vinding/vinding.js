import VindingTextHeader from './vindingtextheader'
import Star from './star'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

function Vinding() {
    return (
        <div className="vinding-container">
            {data.map((data) => {
                return (
                    <div key={data.id} className="vinding">
                        <img className="vinding-img" src="./asset/image 46.jpg" alt="portofolio" />

                        <div className="vinding-text">
                            <VindingTextHeader />
                            <Star img="./asset/star.svg" p="4.5" />
                            <Star img="./asset/love.svg" p="100" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Vinding