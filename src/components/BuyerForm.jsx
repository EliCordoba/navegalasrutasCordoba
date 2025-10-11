import { useState } from "react";

const BuyerForm = ({ onConfirm }) => {
const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: ""
});

const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = Math.floor(Math.random() * 1000000);
    alert(`¡Gracias por tu compra, ${form.nombre}! Tu orden es: #${orderId}`);
    onConfirm(form);
};

return (
    <form className="buyer-form" onSubmit={handleSubmit}>
    <h3>Datos del comprador</h3>
    <input
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
    />
    <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
    />
    <input
        type="tel"
        name="telefono"
        value={form.telefono}
        onChange={handleChange}
        placeholder="Teléfono"
        required
    />
    <button type="submit">Confirmar compra</button>
    </form>
);
};

export default BuyerForm;
