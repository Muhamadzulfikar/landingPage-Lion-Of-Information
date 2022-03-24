function VisiMisiAbout(props) {
    return (
        <>
            <h1>{props.h1}</h1>

            <div className="description-visi">
                <div className="line"></div>
                <p className="text-justify">{props.p}</p>
            </div>
        </>
    )
}

export default VisiMisiAbout