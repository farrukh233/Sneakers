import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorie,
  onAddToCart,
}) {
  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
        {items
          .filter(item => item.title.toLowerCase().includes(searchValue))
          .map(item => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={obj => onAddToFavorie(obj)}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
