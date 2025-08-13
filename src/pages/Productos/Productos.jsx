import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import CardProduct from '../../components/CardProduct/CardProduct';
import './Productos.css';

const Productos = () => {
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener parámetros de búsqueda de la URL 
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search') || '';

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProductos(data);
        
        // Filtrar productos si hay término de búsqueda
        if (searchTerm) {
          const filtered = data.filter(producto => 
            producto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            producto.category.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredProductos(filtered);
        } else {
          setFilteredProductos(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [searchTerm]);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="productos">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{searchTerm ? `Resultados para: "${searchTerm}"` : 'Nuestros Productos'}</h1>
          <p>¡Explora nuestros productos de la mejor calidad!</p>
        </div>
      </section>

      {searchTerm && filteredProductos.length === 0 && (
        <div className="no-results container">
          <p>No se encontraron productos que coincidan con "{searchTerm}".</p>
          <Link to="/productos" className="clear-search">Ver todos los productos</Link>
        </div>
      )}

      <section className="products-section container">
        <div className="productos-grid">
          {filteredProductos.map(producto => (
            <CardProduct key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Productos;
