import { useState } from "react";

const BuyerForm = () => {
const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
});

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del comprador:", form);
    alert("¡Gracias por tu compra, " + form.nombre + "!");
    setForm({ nombre: "", email: "", telefono: "" });
};

return (
    <div className="buyer-form">
    <h2>📝 Datos del comprador</h2>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        required
        />
        <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
        />
        <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
        />
        <button type="submit">Finalizar compra</button>
    </form>
    </div>
);
};

export default BuyerForm;


