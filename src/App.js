import Card from './components/Card';
import Header from './components/Header';
import Bag from './components/Bag';
import Filters from './components/Filters';
import {useEffect,useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [bagItems, setBagItems] = useState([]);
  const [bagOpened, setBagOpened] = useState(false);

  useEffect(() => {
    fetch('https://634f201e4af5fdff3a6ee8b5.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onBuyButton = (obj) => {
    setBagItems([...bagItems, obj]);
  };

  return (
    <div className="wrapper">
      <Header onClickBag={() => setBagOpened(!bagOpened)} />
      <div className="content">
        {bagOpened && <Bag bagItems={bagItems} />}
        <Filters />
        <div className="items-wrapper">
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