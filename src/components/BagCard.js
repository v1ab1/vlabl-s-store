import React from 'react';
import {ReactComponent as CrossIcon} from '../svg/cross.svg';
function BagCard({imageUrl, title, price, id, onRemove}) {
    return (
        <div className="bag-item">
            <div className='bag-pic'>
                <img src={imageUrl} alt="" />
            </div>
            <div className="NamePrice">
                <span>
                    {title}
                </span>
                <span>
                    <span>$</span> {price}
                </span>
            </div>  
            <CrossIcon onClick={() => onRemove(id)} />
        </div>
    );
}
export default BagCard;