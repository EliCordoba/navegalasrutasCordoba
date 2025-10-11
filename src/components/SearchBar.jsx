import { useState } from "react";

const SearchBar = ({ onSearch }) => {
const [query, setQuery] = useState("");

const handleChange = (e) => setQuery(e.target.value);

const handleSearch = () => {
    onSearch(query.trim());
};

const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
};

return (
    <div className="search-bar">
    <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Buscar productos..."
    />
    <button type="button" onClick={handleSearch}>
        Buscar
    </button>
    </div>
);
};

export default SearchBar;


