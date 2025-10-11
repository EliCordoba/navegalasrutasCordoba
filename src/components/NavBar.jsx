import { Link } from "react-router-dom";

const NavBar = ({ cartCount, toggleCart }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">📱 Rio Tech</Link>
      </h1>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/huawei">Huawei</Link></li>
        <li><Link to="/category/samsung">Samsung</Link></li>
        <li><Link to="/category/motorola">Motorola</Link></li>
        <li><Link to="/category/xiaomi">Xiaomi</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>

      <div className="cart" onClick={toggleCart}>
        🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </nav>
  );
};

export default NavBar;









