import Card from './components/Card';
import Header from './components/Header';
import Bag from './components/Bag';
import Filters from './components/Filters';

const arr = [
  { name: 'Macbook Pro 16', price: '3000'},
  { name: 'Macbook Pro 14', price: '2500'},
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
            <Card 
              title="Macbook Pro 16" 
              spec="M1 MAX/32GB/512GB/2022" 
              price="3000" 
              imageUrl="./media/items/2.jpeg" 
            />
            <Card 
              title="Macbook Pro 14" 
              spec="M1 MAX/32GB/512GB/2022" 
              price="3000" 
              imageUrl="./media/items/1.jpeg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;