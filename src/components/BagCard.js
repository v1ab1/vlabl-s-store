import React from 'react';
import {ReactComponent as CrossIcon} from '../svg/cross.svg';
function BagCard({imageUrl, title, price}) {
    return (
        <div className="bag-item">
            <img src={imageUrl} alt="" />
            <div className="NamePrice">
                <span>
                    {title}
                </span>
                <span>
                    <span>$</span> {price}
                </span>
            </div>  
            <CrossIcon />
        </div>
    );
}
export default BagCard;