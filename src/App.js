import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [liked, setLiked] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios.get("https://60e358636c365a0017839276.mockapi.io/items").then(res => {
      setItems(res.data);
    });
    axios.get("https://60e358636c365a0017839276.mockapi.io/cart").then(res => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = obj => {
    axios.post("https://60e358636c365a0017839276.mockapi.io/cart", obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = id => {
    axios.delete(`https://60e358636c365a0017839276.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id != id));
  };

  const onAddToFavorie = obj => {
    axios.post("https://60e358636c365a0017839276.mockapi.io/Liked", obj);
    setLiked(prev => [...prev, obj]);
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper clear'>
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path='/' exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorie={onAddToFavorie}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path='/favorites' exact>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
