const ItemDetail = ({ producto, addToCart }) => {
if (!producto) return <p>No se encontró el producto.</p>;

return (
    <div className="item-detail">
    <img
        src={`/imagenes/${producto.img}`}
        alt={producto.nombre}
        className="item-img"
    />
    <div className="item-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.desc}</p>
        <p className="price">Precio: ${producto.price}</p>
        <button onClick={() => addToCart(producto)} className="btn-add">
        🛒 Agregar al carrito
        </button>
    </div>
    </div>
);
};

export default ItemDetail;

