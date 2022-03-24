import data from "./data"

const VisiMisiContent = () => {
    return (
        <div className="visimisi">
            {data.map((data) => {
                return (
                    <>
                        <h1>{data.h1}</h1>

                        <div className="flex">
                            <div className="line"></div>
                            <div>
                                <p>{data.p}</p>
                                <p>{data.p2}</p>
                                <p>{data.p3}</p>
                            </div>
                        </div>
                    </>
                )
            })}
            <button>Learn More</button>
        </div>
    )
}

export default VisiMisiContent