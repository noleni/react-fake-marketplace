import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import {useContext} from 'react';
import CartContext from "../../store/cart-context";

const MealItem = (props) => {

  const context = useContext(CartContext);

  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <li className={styles.meal} >
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
