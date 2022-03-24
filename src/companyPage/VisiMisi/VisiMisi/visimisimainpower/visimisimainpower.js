import data from "./data"

function VisiMisiMainPower() {
    return (
        <div className="mainPower">
            {data.map((data) => {
                return (
                    <>
                        <img key={data.id} src={data.image} />
                        <div>
                            <h1>{data.h1}</h1>
                            <p>{data.p}</p>
                        </div>
                    </>
                )
            })}


        </div>
    )
}

export default VisiMisiMainPower