function App() {
  return <div className="wrapper clear">
<header className="d-flex justify-between align-center p-40">
 <div className="d-flex align-center">
 <img width={40} heigth={40} src="/img/logo.png" />
  <div>
    <h3 className="text-uppercase"> React Sneakers</h3>
    <p className="opacity-5"> Магазин лучших кросовок</p>
  </div>
 </div>
  <ul className="d-flex">
    <li className="mr-30">
      <img width={18} heigth={18} src="/img/cart.png" /><span>1205 руб.</span></li>
    <li>
      <img width={18} heigth={18} src="/img/user.png" />
    </li>
  </ul>
</header>
<div className="conent p-40">
  <h1 className="mb-40">Все кроссовки</h1>
  <div className="d-flex">
  <div className="card">
    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/add.svg" alt="" /> 
      </button>
   </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Nike Air Max 270</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/add.svg" alt="" /> 
      </button>
   </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
    <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/add.svg" alt="" /> 
      </button>
   </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
    <h5>Мужские Кроссовки Under Armour Curry 8</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column">
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/add.svg" alt="" /> 
      </button>
   </div>
 </div>
  </div>
 </div>
 </div>
}
export default App;
