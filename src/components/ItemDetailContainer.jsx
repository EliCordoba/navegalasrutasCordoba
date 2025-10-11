import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ addToCart }) => {
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);
const { idProducto } = useParams();

useEffect(() => {
    setLoading(true);
    getProductById(idProducto)
    .then(res => setProducto(res))
    .catch(() => setProducto(null))
    .finally(() => setLoading(false));
}, [idProducto]);

if (loading) return <p style={{ textAlign: "center" }}>Cargando...</p>;
if (!producto) return <p style={{ textAlign: "center" }}>Producto no encontrado</p>;

return <ItemDetail producto={producto} addToCart={addToCart} />;
};

export default ItemDetailContainer;

