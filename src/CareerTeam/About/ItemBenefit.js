function ItemBenefit(props) {
    return (
            <div key={props.id}>
                <img src={props.image} />
                <div>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>
            </div>
    )
}

export default ItemBenefit