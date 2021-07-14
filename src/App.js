import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  {
    /*данные с бэкенда (mockApi*/
  }
  React.useEffect(() => {
    fetch("https://60e358636c365a0017839276.mockapi.io/items")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper clear'>
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className='clear cu-p'
                src='/img/btn-remove.svg'
                alt='Clear'
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder='Поиск...'
            />
          </div>
        </div>

        <div className='d-flex flex-wrap'>
          {/*фильтрация поиска*/}
          {items
            .filter(item => item.title.toLowerCase().includes(searchValue))
            .map(item => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log("Добавили в закладки")}
                onPlus={obj => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
