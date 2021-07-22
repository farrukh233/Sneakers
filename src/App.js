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
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://60e358636c365a0017839276.mockapi.io/cart"
      );

      const favoriteResponse = await axios.get(
        "https://60e358636c365a0017839276.mockapi.io/favorites"
      );

      const itemsResponse = await axios.get(
        "https://60e358636c365a0017839276.mockapi.io/items"
      );
      setIsLoading(false);
      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = obj => {
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://60e358636c365a0017839276.mockapi.io/cart/${obj.id}`
      );
      setCartItems(prev =>
        prev.filter(item => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://60e358636c365a0017839276.mockapi.io/cart", obj);
      setCartItems(prev => [...prev, obj]);
    }
  };

  const onRemoveItem = id => {
    axios.delete(`https://60e358636c365a0017839276.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async obj => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(
          `https://60e358636c365a0017839276.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://60e358636c365a0017839276.mockapi.io/favorites",
          obj
        );
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в избранное");
    }
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
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </Route>

      <Route path='/favorites' exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
