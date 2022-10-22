import Card from './components/Card';
import Header from './components/Header';
import Bag from './components/Bag';
import Filters from './components/Filters';
import axios from 'axios';
import {useEffect,useState} from 'react';
import spin from './svg/spin.gif';
import {Route, Routes} from "react-router-dom";

function App() {
  let [items, setItems] = useState([]);
  let [items2, setItems2] = useState([]);
  let [items3, setItems3] = useState([]);
  const [bagItems, setBagItems] = useState([]);
  const [bagOpened, setBagOpened] = useState(false);
  const [handleBuying, setHandleBuying] = useState(true);

  useEffect(() => {
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items2').then((res) => {
      setItems2(res.data);
    });
    axios.get('https://635401c1ccce2f8c02013cf9.mockapi.io/items3').then((res) => {
      setItems3(res.data);
    });
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/bag').then((res) => {
      setBagItems(res.data);
    });
  }, []);

  const onBuyButton = (obj) => {
    try {
      axios.post('https://634f201e4af5fdff3a6ee8b5.mockapi.io/bag', obj);
      setBagItems([...bagItems, obj]);
    } catch (error) {
      alert('Try again'); 
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://634f201e4af5fdff3a6ee8b5.mockapi.io/bag/${id}`);
      setBagItems((prev) => prev.filter(item => item.id != id));
    } catch (error) {
      alert('Try again');
    }
  };

  const upperCost = () => {
    items = [...items.sort((a, b) => a.price < b.price ? 1 : -1)];
    items2 = [...items2.sort((a, b) => a.price < b.price ? 1 : -1)];
    items3 = [...items3.sort((a, b) => a.price < b.price ? 1 : -1)];
    setItems(items);
    setItems2(items2);
    setItems3(items3);
  };
  const downCost = () => {
    items = [...items.sort((a, b) => a.price > b.price ? 1 : -1)];
    items2 = [...items2.sort((a, b) => a.price > b.price ? 1 : -1)];
    items3 = [...items3.sort((a, b) => a.price > b.price ? 1 : -1)];
    setItems(items);
    setItems2(items2);
    setItems3(items3);
  };
  const vlablChoice = () => {
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items2').then((res) => {
      setItems2(res.data);
    });
    axios.get('https://635401c1ccce2f8c02013cf9.mockapi.io/items3').then((res) => {
      setItems3(res.data);
    });
  };

  return (
    <div className="wrapper">
      <Header onClickBag={() => setBagOpened(!bagOpened)} />
      <div className="content">
        {bagOpened && <Bag bagItems={bagItems} onRemove={onRemoveItem} handleBuy={handleBuying} setBuy={setHandleBuying} setOpen={setBagOpened} open={bagOpened} />}
        <Filters upper={upperCost} down={downCost} vlabl={vlablChoice}/>
        <div className="items-wrapper">
          {items.length === 0 ? <img className='spin' src={spin} alt="" /> : null}
          <div className="items">
          <Routes>
            <Route path="/" element={
              <>
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
              </>
            }>
            </Route>
            <Route path="/desktop" element={
              <>
                {items2.map((item, index) => (
                  <Card 
                    key={index}
                    title={item.title}
                    spec={item.spec}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onBuy={onBuyButton}
                  />
                ))}
              </>
            }>
            </Route>
            <Route path="/iphone" element={
              <>
                {items3.map((item, index) => (
                  <Card 
                    key={index}
                    title={item.title}
                    spec={item.spec}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onBuy={onBuyButton}
                  />
                ))}
              </>
            }>
            </Route>
          </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;