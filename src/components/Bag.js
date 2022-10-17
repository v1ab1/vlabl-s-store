import BagCard from './BagCard';
const arrBag = [ {
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
function Bag() {
    return (
        <div style={{display: "none"}} className="bag-wrapper">
            <div className="bag-content">
            {arrBag.map((obj) => (
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