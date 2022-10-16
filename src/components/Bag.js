import BagCard from './BagCard';
function Bag() {
    return (
        <div style={{display: "none"}} className="bag-wrapper">
            <div className="bag-content">
                <BagCard />
            </div>
            <button className="buy-button">
                Check Out
            </button>
        </div>
    );
}
export default Bag;