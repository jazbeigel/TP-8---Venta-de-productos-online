import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useCarrito } from '../../context/HomeCarrito';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const location = useLocation();
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  // Obtener el producto del state o buscarlo si no está disponible
  useEffect(() => {
    if (location.state?.producto) {
      setProducto(location.state.producto);
    } else {
      // Aquí podrías hacer una llamada a la API para obtener el producto por ID
      // Por ahora, usaremos un producto de ejemplo
      setProducto({
        id: parseInt(id),
        title: "Producto Ejemplo",
        price: 99.99,
        description: "Descripción detallada del producto...",
        category: "Categoría",
        image: "https://via.placeholder.com/600x600",
        rating: { rate: 4.5, count: 120 }
      });
    }
  }, [id, location.state]);

  if (!producto) {
    return <div className="producto-detalle">Cargando...</div>;
  }

  const handleAgregarAlCarrito = () => {
    const productoConCantidad = { ...producto, cantidad };
    agregarAlCarrito(productoConCantidad);
    alert(`${producto.title} ha sido agregado al carrito!`);
  };

  const handleIncrementar = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="producto-detalle">
      <div className="producto-detalle-container">
        <div className="producto-imagen">
          <img src={producto.image} alt={producto.title} />
        </div>
        
        <div className="producto-info">
          <h1 className="producto-titulo">{producto.title}</h1>
          
          <div className="producto-categoria">
            <span className="categoria-badge">{producto.category}</span>
          </div>

          <div className="producto-rating">
            <div className="rating-estrellas">
              {'★'.repeat(Math.floor(producto.rating?.rate || 0))}
              {'☆'.repeat(5 - Math.floor(producto.rating?.rate || 0))}
            </div>
            <span className="rating-texto">
              {producto.rating?.rate} ({producto.rating?.count} reseñas)
            </span>
          </div>

          <div className="producto-precio">
            <span className="precio-actual">${producto.price}</span>
          </div>

          <div className="producto-descripcion">
            <h3>Descripción</h3>
            <p>{producto.description}</p>
          </div>

          <div className="producto-acciones">
            <div className="cantidad-selector">
              <label>Cantidad:</label>
              <div className="cantidad-controls">
                <button onClick={handleDecrementar}>-</button>
                <span>{cantidad}</span>
                <button onClick={handleIncrementar}>+</button>
              </div>
            </div>

            <button 
              className="btn-agregar-carrito" 
              onClick={handleAgregarAlCarrito}
            >
              Agregar al Carrito
            </button>
          </div>

          <div className="producto-detalles-adicionales">
            <h4>Detalles del Producto</h4>
            <ul>
              <li>ID del producto: #{producto.id}</li>
              <li>Categoría: {producto.category}</li>
              <li>Disponibilidad: En stock</li>
              <li>Envío: Gratis en compras superiores a $50</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;
