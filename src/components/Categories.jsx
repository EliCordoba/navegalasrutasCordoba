import { Link } from "react-router-dom";

const Categories = () => {
const categorias = ["Huawei", "Samsung", "Motorola", "Xiaomi"];

return (
    <section className="categories">
    {categorias.map((cat) => (
        <Link key={cat} to={`/category/${cat.toLowerCase()}`}>
        <div className="category-card">
            <img src={`${import.meta.env.BASE_URL}imagenes/${cat}.jpg`} alt={`Categoría ${cat}`} />
            <p>{cat}</p>
        </div>
        </Link>
    ))}
    </section>
);
};

export default Categories;
