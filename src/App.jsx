import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import PromoBanner from "./components/PromoBanner";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import CartPanel from "./components/CartPanel";
import BuyerForm from "./components/BuyerForm";

import "./components/App.css";


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart((prev) => !prev);

  const addToCart = (producto) => {
    setCart((prev) => [...prev, { ...producto, qty: 1 }]);
  };

  const removeItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const emptyCart = () => setCart([]);

  return (
    <BrowserRouter>
      <NavBar cartCount={cart.length} toggleCart={toggleCart} />
      <PromoBanner />

      {showCart && (
        <div className="cart-section">
          <CartPanel cart={cart} removeItem={removeItem} emptyCart={emptyCart} />
          <BuyerForm />
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda online!" />}
        />
        <Route
          path="/category/:idCategoria"
          element={<ItemListContainer greeting="Productos por categoría" />}
        />
        <Route
          path="/item/:idProducto"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route
          path="*"
          element={
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              Página no encontrada (404)
            </p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
