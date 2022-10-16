import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header">
          <div className="headerLeft">
            <img src="./media/logo.svg" alt="" />
            <span className="header-store">
              Store
            </span>
          </div>
          <div className="headerRight">     
            <svg height="44" viewBox="0 0 13 44" width="13" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 44h13v-44h-13z"/><path d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z" fill="#fff"/></g>
            </svg>
          </div>
        </div>
      </header>
      <div className="content">
        <div style={{display: "none"}} className="bag-wrapper">
          <div className="bag-content">
            <div className="bag-item">
              <img src="./media/items/1.jpeg" alt=""></img>
              <div className="NamePrice">
                <span>
                  Macbook Pro 16
                </span>
                <span>
                  <span>$</span> 3 000
                </span>
              </div>  
              <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <button className="buy-button">
            Check Out
          </button>
        </div>
        <div className='content-header'>
          <div>
            <button>
              model line
            </button>
            <button>
              diagonal
            </button>
            <button>
              CPU
            </button>
            <button>
              RAM
            </button>
            <button>
              year of issue
            </button>
          </div>
          <div>
            <button>
              sorting
            </button>
          </div>
        </div>
        <div className="items-wrapper">
          <div className="items">
            <Card></Card>
            <div className="card">
                <img width={254} height={153} src="./media/items/2.jpeg" alt=""></img>
                <p className="model-name">Macbook Pro 16</p>
                <p className="tech-spec">M1 MAX/32GB/512GB/2022</p>
                <div className="price-wrapper">
                    <span className="price-text">
                      Price:
                    </span>
                    <span>
                    <span>$</span> 3 000
                    </span>
                </div>
                <button className="buy-button">
                  Buy
                </button>
              </div>
            <div className="card">
              <img width={254} height={153} src="./media/items/1.jpeg" alt=""></img>
              <p className="model-name">Macbook Pro 14</p>
              <p className="tech-spec">M1 MAX/32GB/512GB/2022</p>
              <div className="price-wrapper">
                  <span className="price-text">
                    Price:
                  </span>
                  <span>
                  <span>$</span> 2 500
                  </span>
              </div>
              <button className="buy-button">
                Buy
              </button>
            </div>
            <div className="card">
              <img width={254} height={153} src="./media/items/4.jpeg" alt=""></img>
              <p className="model-name">Macbook Air</p>
              <p className="tech-spec">M2/24GB/512GB/2022</p>
              <div className="price-wrapper">
                  <span className="price-text">
                    Price:
                  </span>
                  <span>
                  <span>$</span> 1 200
                  </span>
              </div>
              <button className="buy-button">
                Buy
              </button>
            </div>
            <div className="card">
              <img width={254} height={153} src="./media/items/3.jpeg" alt=""></img>
              <p className="model-name">Macbook Pro 13</p>
              <p className="tech-spec">M2/16GB/512GB/2022</p>
              <div className="price-wrapper">
                  <span className="price-text">
                    Price:
                  </span>
                  <span>
                  <span>$</span> 2 000
                  </span>
              </div>
              <button className="buy-button">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;