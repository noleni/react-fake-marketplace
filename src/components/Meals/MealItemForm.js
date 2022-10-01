import React, {useRef, useState} from 'react';
import Input from '../UI/Input';
import styles from './MealItemForm.module.css';


const MealItemForm = (props) => {

  const [amountIsValid, setAmountisValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountisValid(false)
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantité"
        input={{
          id:"amount_" + props.id,
          type:"number",
          min:"1",
          max:"5",
          step:"1",
          defaultValue:"1",
        }}
      />
      <button type='submit'>+ Ajouter</button>
      {!amountIsValid && <p>Choisis une quantité entre 1 et 5</p>}
    </form>
  )
};

export default MealItemForm;
