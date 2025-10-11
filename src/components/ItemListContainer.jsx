import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting, filterFn }) => {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const { idCategoria } = useParams();

useEffect(() => {
    setLoading(true);
    const fetchData = idCategoria ? getProductsByCategory(idCategoria) : getProducts();
    fetchData
    .then((res) => {
        const filtered = filterFn ? filterFn(res) : res;
        setProductos(filtered);
    })
    .catch(() => setProductos([]))
    .finally(() => setLoading(false));
}, [idCategoria, filterFn]);

return (
    <main className="item-list-container">
    <h2>{greeting}</h2>
    {loading && <p>Cargando productos...</p>}
    {!loading && productos.length === 0 && <p>No hay productos disponibles.</p>}
    {!loading && productos.length > 0 && <ItemList productos={productos} />}
    </main>
);
};

export default ItemListContainer;
