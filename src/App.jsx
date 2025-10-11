import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import PromoBanner from "./components/PromoBanner";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Categories from "./components/Categories";
import Contacto from "./components/Contacto";
import CartPanel from "./components/CartPanel";
import BuyerForm from "./components/BuyerForm";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCart = () => setCartVisible(!cartVisible);
  const handleSearch = (term) => setSearchTerm(term.toLowerCase());
  const filteredProducts = (productos) =>
    productos.filter((p) => p.nombre.toLowerCase().includes(searchTerm));

  return (
    <>
      <PromoBanner />
      <NavBar toggleCart={toggleCart} />

      {cartVisible && (
        <>
          <CartPanel />
          <BuyerForm />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <Categories />
              <ItemListContainer
                greeting="¡Bienvenido a nuestra tienda online!"
                filterFn={filteredProducts}
              />
            </>
          }
        />
        <Route
          path="/category/:idCategoria"
          element={<ItemListContainer greeting="Categoría seleccionada" />}
        />
        <Route path="/item/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default App;
