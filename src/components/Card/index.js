import styles from "./Card.module.scss";
import React from "react";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  console.log(isAdded);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.OnFavorite}>
        <img src='/img/heart-unliked.svg' alt='Unliked' />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt='Sneakers' />

      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          onClick={handleClick}
          src={isAdded ? "/img/btn-cheked.svg" : "img/add.svg"}
          alt='Plus'
        />
      </div>
    </div>
  );
}

export default Card;
