import BagCard from './BagCard';
import React from 'react';

function Bag({bagItems = []}) {
    return (
        <div className="bag-wrapper">
            <div className="bag-content">
            {bagItems.map((obj, index) => (
              <BagCard
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}
            </div>
            <button className="buy-button">
                Check Out
            </button>
        </div>
    );
}
export default Bag;