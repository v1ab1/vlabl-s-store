function Card() {
    return (
        <div className="card">
            <img width={254} height={153} src="./media/items/5.jpeg" alt=""></img>
            <p className="model-name">Macbook Air</p>
            <p className="tech-spec">M1/16GB/512GB/2022</p>
            <div className="price-wrapper">
                <span className="price-text">
                    Price:
                </span>
                <span>
                    <span>$</span> 999
                </span>
            </div>
            <button className="buy-button">
                Buy
            </button>
        </div>
    );
}
export default Card;