function Star(props) {
    return (
        <div className="flex">
            <img src={props.img} alt="star" />
            <p>{props.p}</p>
        </div>

    )
}
export default Star