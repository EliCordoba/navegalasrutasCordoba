const CartPanel = ({ cart, removeItem, emptyCart }) => {
  // Calcular total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-panel">
      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.price} x {item.qty} ={" "}
                <strong>${item.price * item.qty}</strong>
                <button onClick={() => removeItem(index)}>❌</button>
              </li>
            ))}
          </ul>

          <p>
            <strong>Total: ${total}</strong>
          </p>

          <button onClick={emptyCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartPanel;

