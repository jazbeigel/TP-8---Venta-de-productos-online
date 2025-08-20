import React from 'react';
import { useCarrito } from '../../context/HomeCarrito';
import { Link } from 'react-router-dom';
import './Carrito.css';

const Carrito = () => {
  const { items, total, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  if (items.length === 0) {
    return (
      <div className="titulo-carrito">
        <section className="hero">
          <div className="hero-content">
            <h1>Tu carrito de compras</h1>
          </div>
        </section>
        <p className="subtitulo">Vacío</p>
      </div>
    );
  }

  return (
    <div className="titulo-carrito">
      <section className="hero">
        <div className="hero-content">
          <h1>Tu carrito de compras</h1>
        </div>
      </section>
      <div className="carrito-items">
        {items.map(item => (
          <div key={item.id} className="carrito-item">
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Subtotal: ${(item.price * item.cantidad).toFixed(2)}</p>
            </div>
            <div className="item-actions">
              <Link 
                to={`/producto-detalle/${item.id}`} 
                className="mas-info-btn"
                state={{ producto: item }}
              >
                Más info
              </Link>
              <button 
                className="eliminar-btn" 
                onClick={() => eliminarDelCarrito(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="carrito-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="vaciar-btn" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Carrito;
