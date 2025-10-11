import { Link } from "react-router-dom";

const Categories = () => {
const categorias = [
    { nombre: "Huawei", img: `${import.meta.env.BASE_URL}imagenes/huaweicategoria.jpg` },
    { nombre: "Samsung", img: `${import.meta.env.BASE_URL}imagenes/samsungcategoria.webp` },
    { nombre: "Motorola", img: `${import.meta.env.BASE_URL}imagenes/motorolacategoria.webp` },
    { nombre: "Xiaomi", img: `${import.meta.env.BASE_URL}imagenes/xiaomicategoria.avif` },
];

return (
    <section className="categories">
    {categorias.map((cat) => (
        <Link
        key={cat.nombre}
        to={`/category/${cat.nombre.toLowerCase()}`}
        className="category-card"
        >
        <img src={cat.img} alt={cat.nombre} className="category-img" />
        <h3>{cat.nombre}</h3>
        </Link>
    ))}
    </section>
);
};

export default Categories;
