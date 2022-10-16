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
        <div className="bag-wrapper">
          <div className="bag-content">
            <div className="bag-item">
              <img src="./media/items/1.jpeg" alt=""></img>
              <span>Macbook Pro 16</span>
              
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
            <div className="card">
              <img width={254} height={153} src="./media/items/5.jpeg" alt=""></img>
              <p className="model-name">Macbook Air</p>
              <p className="tech-spec">M1/16GB/512GB/2022</p>
              <div className="price-wrapper">
                  <span className="price-text">
                    Price:
                  </span>
                  <span>
                  <span>$</span> 999
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