import Card from './components/Card';
import Header from './components/Header';
import Bag from './components/Bag';
import Filters from './components/Filters';
import axios from 'axios';
import {useEffect,useState} from 'react';
import spin from './svg/spin.gif';

function App() {
  let [items, setItems] = useState([]);
  const [bagItems, setBagItems] = useState([]);
  const [bagOpened, setBagOpened] = useState(false);
  const [handleBuying, setHandleBuying] = useState(true);

  useEffect(() => {
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  }, []);

  const onBuyButton = (obj) => {
    try {
      axios.post('https://634f201e4af5fdff3a6ee8b5.mockapi.io/bag', obj);
      setBagItems([...bagItems, obj]);
    } catch (Error) {
      alert('Try again'); 
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://634f201e4af5fdff3a6ee8b5.mockapi.io/bag/${id}`);
      setBagItems((prev) => prev.filter(item => item.id !== id));
    } catch (Error) {
      alert('Try again');
    }
  };

  const upperCost = () => {
    items = [...items.sort((a, b) => a.price < b.price ? 1 : -1)];
    setItems(items);
  };
  const downCost = () => {
    items = [...items.sort((a, b) => a.price > b.price ? 1 : -1)];
    setItems(items);
  };
  const vlablChoice = () => {
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
  };

  return (
    <div className="wrapper">
      <Header items={items} setItems={setItems} onClickBag={() => setBagOpened(!bagOpened)} />
      <div className="content">
        {bagOpened && <Bag onClickBag={() => setBagOpened(!bagOpened)} bagItems={bagItems} onRemove={onRemoveItem} handleBuy={handleBuying} setBuy={setHandleBuying} setOpen={setBagOpened} open={bagOpened} />}
        <Filters upper={upperCost} down={downCost} vlabl={vlablChoice}/>
        <div className="items-wrapper">
          {items.length === 0 ? <img className='spin' src={spin} alt="" /> : null}
          <div className="items">
            {items.map((item, index) => (
              <Card 
                key={index}
                title={item.title}
                spec={item.spec}
                price={item.price}
                imageUrl={item.imageUrl}
                onBuy={onBuyButton}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;