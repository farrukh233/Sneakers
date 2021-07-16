import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <Link to='/'>
        <div className='d-flex align-center'>
          <img width={40} heigth={40} src='/img/logo.png' alt='logo' />
          <div>
            <h3 className='text-uppercase'> React Sneakers</h3>
            <p className='opacity-5'> Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className='d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
          <img width={18} heigth={18} src='/img/cart.png' alt='cart' />
          <span>1205 руб.</span>
        </li>
        <li className='mr-20 cu-p'>
          <Link to='/favorites'>
            <img
              className='mr-30 cu-p'
              width={18}
              heigth={18}
              src='/img/heart.svg'
              alt='Закладки'
            />
          </Link>
        </li>
        <li>
          <img width={18} heigth={18} src='/img/user.png' alt='user' />
        </li>
      </ul>
    </header>
  );
}

export default Header;
