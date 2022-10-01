import React from 'react';
import styles from './Header.module.css';
import main_img from '../../assets/food.jpg';
import HeaderCartButton from '../Cart/HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Dream your meal</h1>
        <HeaderCartButton onClick={props.onDisplayModal}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={main_img} alt="food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
