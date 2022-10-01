import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [modalDisplay, setModalDisplay] = useState(false);

  const displayModal = () => {
    setModalDisplay(true);
  };

  const hideModal = () => {
    setModalDisplay(false);
  };

  return (
    <CartProvider>
      {modalDisplay && <Cart onClose={hideModal}/>}
      <Header onDisplayModal={displayModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

