import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const { idCategoria } = useParams();

useEffect(() => {
    setLoading(true);
    const fetchData = idCategoria ? getProductsByCategory(idCategoria) : getProducts();
    fetchData.then(res => {
    setProductos(res);
    setLoading(false);
    });
}, [idCategoria]);

return (
    <main className="item-list-container">
    <h2>{greeting}</h2>
    {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </main>
);
};

export default ItemListContainer;




