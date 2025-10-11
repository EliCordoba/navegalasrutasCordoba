import { useCart } from "../context/CartContext";

const CartPanel = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-panel">
        <h3>Carrito vacío</h3>
        <p>No hay productos agregados.</p>
      </div>
    );
  }

  return (
    <div className="cart-panel">
      <h3>Tu carrito</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={`/imagenes/${item.img}`} alt={item.nombre} width="50" />
            <span>{item.nombre}</span> - ${item.price} x {item.qty}
            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default CartPanel;

