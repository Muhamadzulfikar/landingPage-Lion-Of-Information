import data from './data'
function FeaturedOnContent() {
    return (
        data.map(function (data) {
            return (
                <div key={data.id} className="featuredon-content">
                    <h1>{data.header1}<br />{data.header2}</h1>
                    <p>{data.p1}<br />{data.p2}<br />{data.p3}<br />{data.p4}</p>
                    <button>
                        Learn More
                        <img src="./asset/short_right.svg" />
                    </button>
                </div>
            )
        })
    )
}

export default FeaturedOnContent