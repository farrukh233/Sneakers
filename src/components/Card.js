function Card() {
  return (
    <div className='card'>
      <img width={133} height={112} src='/img/sneakers/3.jpg' alt='Sneakers' />
      <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src='/img/add.svg' alt='' />
        </button>
      </div>
    </div>
  );
}

export default Card;
