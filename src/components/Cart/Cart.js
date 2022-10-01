import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

  const context = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    context.addItem(item);
  };

  const cardItems = (
    <ul className={styles['cart-items']}>
      {context.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const hasItems = context.items.length > 0;

  return (
    <Modal onClick={props.onClose}>
      {cardItems}
      <div className={styles.total}>
        <span>Montant total</span>
        <span>{context.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={styles.button}>Order</button> }
      </div>
    </Modal>
    )
};

export default Cart;
