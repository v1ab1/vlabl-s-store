import BagCard from './BagCard';
import React from 'react';

function Bag({items = []}) {
    return (
        <div className="bag-wrapper">
            <div className="bag-content">
            {items.map((obj) => (
              <BagCard 
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