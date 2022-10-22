import BagCard from './BagCard';
import React from 'react';
import {ReactComponent as ArrowIcon} from '../svg/arrow-left.svg';
import axios from 'axios';

function Bag({bagItems = [], onRemove, handleBuy, setBuy, setOpen, open}) {
    function EmptyFormCheck() {
      const forms = document.getElementsByClassName("forms");
      for (let i in forms) {
        forms[i].style.border = "1px solid #379afd";
        if(forms[i].value == '') {
          forms[i].style.border = "1px solid red";
        }
      }
      if (forms[0].value !== '' && forms[1].value !== '' && forms[2].value !== '' && forms[3].value !== '' && forms[4].value !== '') {
        setBuy(!handleBuy);
        setOpen(!open);
        let formsData = [forms[0].value, forms[1].value, forms[2].value, forms[3].value, forms[4].value];
        axios.post('https://634f201e4af5fdff3a6ee8b5.mockapi.io/personalData', formsData);
      }
    }
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
                  bagItems.length === 0 ? 
                  (<h1>Your bag is empty</h1>)
                  : 
                  <>
                    <div className='total-price' id="total">
                      <span className="total-span">Price:</span>
                      <p><span className="total-span">$ </span>{bagItems.reduce((sum, obj) => obj.price + sum, 0)}</p>
                    </div>
                    <button onClick={() => {setBuy(!handleBuy)}} className="buy-button">
                      Check Out
                    </button>
                  </>
                }
              </div>
              </div>) :
              (
                <>
                  <div>
                    <div onClick={() => {setBuy(!handleBuy)}} className='arrowLeft'><ArrowIcon /></div>
                    <input className="forms" type="text" placeholder="First name" />
                    <input className="forms" type="text" placeholder="Last name" />
                    <input className="forms" type="text" placeholder="City" />
                    <input className="forms" type="text" placeholder="Adress" />
                    <input className="forms" type="number" placeholder="Phone" />
                  </div>
                  <div className='total-price'>
                    <span className="total-span">Price:</span>
                    <p><span className="total-span">$ </span>{bagItems.reduce((sum, obj) => obj.price + sum, 0)}</p>
                  </div>
                  <div>
                    <button onClick={() => EmptyFormCheck()} className="buy-button">
                      Pay
                    </button>
                  </div>
                </>
              )
            }
        </div>
    );
}
export default Bag;