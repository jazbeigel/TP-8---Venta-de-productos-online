import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/quienes-somos">Quiénes Somos</Link>
      <Link to="/contacto">Contacto</Link>

      <div className="nav-icons-container">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input 
            type="text" 
            placeholder="Búsqueda" 
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSearch(e);
              }
            }}
          />
        </div>
        <Link to="/carrito" className="nav-icon-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link to="/usuario" className="nav-icon-link">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
