import { Link } from "react-router-dom";

const NavBar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">📱 Rio Tech</h1>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/huawei">Huawei</Link></li>
        <li><Link to="/category/samsung">Samsung</Link></li>
        <li><Link to="/category/motorola">Motorola</Link></li>
        <li><Link to="/category/xiaomi">Xiaomi</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="cart-widget">
        <button onClick={toggleCart} className="cart-btn">
          🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;









