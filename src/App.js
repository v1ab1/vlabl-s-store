import Card from './components/Card';
import Header from './components/Header';
import Bag from './components/Bag';
import Filters from './components/Filters';

const arr = [ {
  title: "Macbook Pro 16",
  spec: "M1 MAX/32GB/512GB/2022",
  price: "3000",
  imageUrl: "./media/items/2.jpeg",
},{
  title: "Macbook Pro 14",
  spec: "M1 MAX/32GB/512GB/2022",
  price: "2500",
  imageUrl: "./media/items/1.jpeg",
},
];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Bag />
        <Filters />
        <div className="items-wrapper">
          <div className="items">
            {arr.map((obj) => (
              <Card 
                title={obj.title}
                spec={obj.spec}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;