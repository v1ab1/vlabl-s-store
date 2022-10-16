function Card(props) {
    return (
        <div className="card">
            <img height={153} src={props.imageUrl} alt=""></img>
            <p className="model-name">{props.title}</p>
            <p className="tech-spec">{props.spec}</p>
            <div className="price-wrapper">
                <span className="price-text">
                    Price:
                </span>
                <span>
                    <span>$</span> {props.price}
                </span>
            </div>
            <button className="buy-button">
                Buy
            </button>
        </div>
    );
}
export default Card;