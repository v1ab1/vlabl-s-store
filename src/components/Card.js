import React from 'react';
function Card({imageUrl, title, spec, price, onBuy}) {
    const [isAdded, setIsAdded] = React.useState();
    const onClickBuy = () => {
        setIsAdded(!isAdded);
        if (!isAdded) {
            onBuy({title, price, imageUrl});
        }
    };
    return (
        <div className="card"> 
            <img height={153} src={imageUrl} alt=""></img>
            <p className="model-name">{title}</p>
            <p className="tech-spec">{spec}</p>
            <div className="price-wrapper">
                <span className="price-text">
                    Price:
                </span>
                <span>
                    <span>$</span> {price}
                </span>
            </div>
            <button onClick={onClickBuy} className={isAdded ? "buy-done-button" : "buy-button"}>
                {isAdded ? 'Done' : 'Buy'}
            </button>
        </div>
    );
}
export default Card;