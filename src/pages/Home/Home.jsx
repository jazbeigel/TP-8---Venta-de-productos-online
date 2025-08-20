import { useState, useEffect } from 'react';
import './Home.css';
import CardProduct from '../../components/CardProduct/CardProduct';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const categories = [
    { name: 'Electronics', icon: '💻', color: '#3B82F6' },
    { name: 'Jewelery', icon: '💍', color: '#EC4899' },
    { name: "Clothing", icon: '👔', color: '#10B981' },
  ];  

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Descubre las <span className="highlight">Mejores Ofertas</span>
            </h1>
            <p className="hero-subtitle">
              Productos de calidad al mejor precio. Envíos rápidos y seguros a todo el país.
            </p>
            <div className="botones-cartel">
              <button className="btn-primary"> <a href="/productos"> Comprar Ahora </a></button>
              <button className="btn-secondary">Ver Ofertas</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" 
                alt="Shopping" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Envío Gratis</h3>
            <p>En compras superiores a $50</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3>Pagos Seguros</h3>
            <p>Todas las tarjetas aceptadas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Devoluciones</h3>
            <p>30 días para cambios</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📞</div>
            <h3>Soporte 24/7</h3>
            <p>Atención al cliente premium</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Compra por Categoría</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              style={{ backgroundColor: category.color + '20' }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <button className="category-btn">Explorar</button>
            </div>
          ))}
        </div>
      </section>

    
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>¡No te pierdas nuestras ofertas!</h2>
          <p>Suscríbete y recibe un 10% de descuento en tu primera compra</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Suscribirse
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
