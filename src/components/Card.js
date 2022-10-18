import React from 'react';
function Card(props) {
    const [isAdded, setIsAdded] = React.useState();
    const onClickBuy = () => {
        setIsAdded(true);
    };
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
            <button onClick={onClickBuy} className={isAdded ? "buy-done-button" : "buy-button"}>
                {isAdded ? 'Done' : 'Buy'}
            </button>
        </div>
    );
}
export default Card;