import { Link } from "react-router-dom";

const Item = ({ producto }) => {
return (
    <div className="category-card">
    <img src={`${import.meta.env.BASE_URL}imagenes/${producto.img}`} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>${producto.price}</p>
    <Link to={`/item/${producto.id}`}>
    <button>Ver detalle</button>
    </Link>
    </div>
);
};

export default Item;


