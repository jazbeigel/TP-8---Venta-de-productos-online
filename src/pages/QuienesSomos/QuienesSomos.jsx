import './QuienesSomos.css'
import empresa from '../../assets/empresa.jpg';


const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Quiénes Somos</h1>
          <p>Conoce nuestra historia y compromiso con la excelencia</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Nuestra Historia</h2>
              <p>
                Desde nuestros inicios, nos hemos dedicado a ofrecer productos de la más alta calidad 
                con un enfoque centrado en el cliente. Nuestra pasión por la excelencia nos ha llevado 
                a convertirnos en un referente en el sector, manteniendo siempre los más altos estándares 
                de calidad y servicio.
              </p>
              <p>
                Con años de experiencia en el mercado, hemos construido relaciones sólidas con nuestros 
                proveedores y clientes, garantizando productos auténticos y un servicio excepcional que 
                supera las expectativas.
              </p>
            </div>
              <div className="image-contenedor">
              <img src={empresa} alt="empresa"  className="image"></img>
              </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Calidad</h3>
              <p>Compromiso inquebrantable con productos de primera calidad</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Confianza</h3>
              <p>Relaciones transparentes y duraderas con nuestros clientes</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Servicio</h3>
              <p>Atención personalizada y soporte post-venta excepcional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                  alt="Carlos Rodríguez" 
                  className="team-photo"
                />
              </div>
              <h3>Carlos Rodríguez</h3>
              <p>Director General - Líder visionario con más de 15 años de experiencia en el sector</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" 
                  alt="María González" 
                  className="team-photo"
                />
              </div>
              <h3>María González</h3>
              <p>Gerente de Ventas - Profesional dedicada a brindar la mejor experiencia de compra</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  alt="Juan Pérez" 
                  className="team-photo"
                />
              </div>
              <h3>Juan Pérez</h3>
              <p>Líder de Soporte - Especialista comprometido con la satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>5000+</h3>
              <p>Clientes Satisfechos</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Productos Disponibles</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Satisfacción Garantizada</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Soporte Disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuienesSomos;
