const productos = [
{ id: 1, nombre: "Huawei P40", categoria: "huawei", price: 250000, img: "Huawei.avif", desc: "Teléfono Huawei" },
{ id: 2, nombre: "Samsung Galaxy S21", categoria: "samsung", price: 300000, img: "samsung.jpg", desc: "Teléfono Samsung" },
{ id: 3, nombre: "Motorola Edge", categoria: "motorola", price: 190000, img: "motorola.jpg", desc: "Teléfono Motorola" },
{ id: 4, nombre: "Xiaomi Mi 11", categoria: "xiaomi", price: 200000, img: "XIAOMI.jpg", desc: "Teléfono Xiaomi" },
{ id: 5, nombre: "Huawei Mate X6",categoria: "huawei", price:440000, img: "Huawei Mate X6.jpg", desc: "Teléfono Huawei" },
{ id: 6, nombre: "Huawei Nova 12i", categoria: "huawei", price:489000, img: "Huawei Nova 12i.jpg", desc: "Teléfono Huawei" },
{ id: 7, nombre: "Huawei P50 Pro", categoria: "huawei", price:620000, img: "Huawei P50 Pro.jpg", desc: "Teléfono Huawei" },
{ id: 8, nombre: "Motorola G04S", categoria: "motorola", price: 589000, img: "Motorola G04S.jpg", desc: "Teléfono Motorola" },
{ id: 9, nombre: "Motorola G42", categoria: "motorola", price: 385000, img: "Motorola G42.webp", desc: "Teléfono Motorola" },
{ id: 10, nombre: "Motorola G85",categoria: "motorola", price: 450000,  img: "Motorola G85.webp", desc: "Teléfono Motorola" },
{ id:11, nombre: "Samsung A55", categoria: "samsung", price: 550000, img: "Samsung A55.png", desc: "Teléfono Samsung" },
{ id:12, nombre: "Samsung A56", categoria: "samsung", price:780000, img: "Samsung A56.jpg", desc: "Teléfono Samsung" },
{ id:13, nombre: "Samsung Galaxy S24 Ultra", categoria: "samsung", price: 2200000, img: "Samsung Galaxy S24 Ultra.webp", desc: "Teléfono Samsung" },
{ id:14, nombre: "Xiaomi A3", categoria: "xiaomi", price:350000, img: "Xiaomi A3.jpg", desc: "Teléfono Xiaomi" },
{ id:15, nombre: "Xiaomi Redmi 13 Dual", categoria: "xiaomi", price: 430000, img: "Xiaomi Redmi 13 Dual.webp", desc: "Teléfono Xiaomi" },
{ id:16, nombre: "Xiaomi Redmi 14c", categoria: "xiaomi", price: 580000, img: "Xiaomi Redmi 14c.webp", desc: "Teléfono Xiaomi" },
]
export const getProducts = () =>
new Promise((res) => setTimeout(() => res(productos), 500));

export const getProductsByCategory = (cat) =>
new Promise((res) => setTimeout(() => res(productos.filter(p => p.categoria === cat)), 500));

export const getProductById = (id) =>
new Promise((res) => setTimeout(() => res(productos.find(p => p.id === parseInt(id))), 500));