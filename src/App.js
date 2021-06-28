import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские Кроссовки Puma X Aka Boku Future Rider",
    price: 1299,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 8999,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 7999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
      <div className='conent p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='d-flex'>
          {arr.map(obj => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
