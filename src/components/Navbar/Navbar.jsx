import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/producto-detalle">Detalle</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/quienes-somos">Quiénes Somos</Link>
      <Link to="/contacto">Contacto</Link>

      <div className="nav-icons-container">
        <div className="search-bar">
          <i className="fas fa-search search-icon"></i>
          <input type="text" placeholder="Búsqueda" />
        </div>
        <Link to="/carrito" className="nav-icon-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <Link to="/perfil" className="nav-icon-link">
          <i className="fas fa-user"></i>
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;