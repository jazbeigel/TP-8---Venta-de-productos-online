import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../context/HomeCarrito';
import './CardProduct.css';

const CardProduct = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();
  const navigate = useNavigate();
  
  if (!producto) return null;

  const { image, title, category, description, price, id } = producto;

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(producto);
    alert(`${title} ha sido agregado al carrito!`);
  };

  const handleVerMasInfo = () => {
    navigate(`/producto-detalle/${id}`, { state: { producto } });
  };

  return (
    <div className="card-product">
      <div className="card-product-image">
        <img src={image} alt={title} />
      </div>
      <div className="info">
        <h3 className="title">{title}</h3>
        <p className="category">{category}</p>
        <p className="descripcion">
          {description?.substring(0, 100)}...
        </p>
        <button className="masInfo" onClick={handleVerMasInfo}>
          Mas info
        </button>
        <div className="price">
          <span>${price}</span>
        </div>
        <button className="button" onClick={handleAgregarAlCarrito}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
