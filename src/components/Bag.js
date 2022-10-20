import BagCard from './BagCard';
import React from 'react';
import {ReactComponent as ArrowIcon} from '../svg/arrow-left.svg';

function Bag({bagItems = [], onRemove, handleBuy, setBuy, setOpen, open}) {
    return (
        <div className="bag-wrapper">
            {handleBuy ? (<div>
              <div className="bag-content">
                {bagItems.map((obj, index) => (
                  <BagCard
                    key={index}
                    title={obj.title}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    id={obj.id}
                    onRemove={onRemove}
                  />
                ))} 
                {
                  bagItems.length === 0 ? (<h1>Your bag is empty</h1>) : <div className='total-price' id="total"><span className="total-span">Price:</span><p><span className="total-span">$ </span>500</p></div>
                }
              </div>
              <button onClick={() => {setBuy(!handleBuy)}} className="buy-button">
                  Check Out
              </button>
              </div>) :
              (
                <div>
                  <div>
                    <div onClick={() => {setBuy(!handleBuy)}} className='arrowLeft'><ArrowIcon /></div>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Adress" />
                    <input type="number" placeholder="Phone" />
                  </div>
                  <div className='total-price'>
                    <span className="total-span">Price:</span>
                    <p><span className="total-span">$ </span>500</p>
                  </div>
                  <div onClick={() => setBuy(!handleBuy)}>
                    <button onClick={() => setOpen(!open)} className="buy-button">
                      Pay
                    </button>
                  </div>
                </div>
              )
            }
        </div>
    );
}
export default Bag;