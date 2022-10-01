import React, {useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = (props) => {

  const ctx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = ctx;

  const numberOfCartItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const btnClass= `${styles.button} ${ btnIsHighlighted? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClass} onClick={props.onClick} >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Panier</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
};

export default HeaderCartButton;
