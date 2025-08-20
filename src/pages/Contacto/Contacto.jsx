import { useState } from 'react';
import logoDirec from '../../assets/logoDirec.png';
import llamar from '../../assets/llamar.jpg';
import email from '../../assets/email.jpg';
import chat from '../../assets/chat.png';
import './Contacto.css'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente se enviaría el formulario
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    }, 3000);
  };

  return (
    <div className="contacto">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte. Contáctanos de la manera que prefieras</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Información de Contacto</h2>
              <p>
                ¿Tienes preguntas sobre nuestros productos o necesitas asistencia? 
                Nuestro equipo está disponible para ayudarte en todo momento.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <div className="logos"><img src={logoDirec} alt="empresa" className="fotos"/></div>
                  <h3>Dirección</h3>
                  <p>Av. Principal 1234<br />Ciudad, País</p>
                </div>
                
                <div className="info-card">
                  <div className="logos"><img src={llamar} alt="empresa" className="fotos"/></div>
                  <h3>Teléfono</h3>
                  <p>+54 11 1234-5678</p>
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                </div>
                
                <div className="info-card">
                  <div className="logos"><img src={email} alt="empresa" className="fotos"/></div>
                  <h3>Email</h3>
                  <p>info@empresa.com</p>
                  <p>Respuesta en 24 horas</p>
                </div>
                
                <div className="info-card">
                  <div className="logos"><img src={chat} alt="empresa" className="fotos" /></div>
                  <h3>Chat en Vivo</h3>
                  <p>Disponible 24/7 en nuestro sitio</p>
                </div>
              </div>

              <div className="social-media">
                <h3>Síguenos en redes sociales</h3>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <span>📘</span>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>📸</span>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link">
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Envíanos un Mensaje</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <h3>¡Mensaje enviado con éxito!</h3>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className='total-de-botones'>
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre completo *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="asunto">Asunto *</label>
                      <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="consulta">Consulta general</option>
                        <option value="producto">Información de producto</option>
                        <option value="pedido">Estado de pedido</option>
                        <option value="devolucion">Devolución</option>
                        <option value="sugerencia">Sugerencia</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje">Mensaje *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Describe tu consulta o comentario..."
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="submit-btn">
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>¿Cuál es el tiempo de envío?</h3>
              <p>El tiempo de envío estándar es de 3-5 días hábiles. También ofrecemos envío express de 24-48 horas.</p>
            </div>
            <div className="faq-item">
              <h3>¿Puedo devolver un producto?</h3>
              <p>Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en su estado original.</p>
            </div>
            <div className="faq-item">
              <h3>¿Ofrecen garantía?</h3>
              <p>Todos nuestros productos cuentan con garantía del fabricante. El período varía según el producto.</p>
            </div>
            <div className="faq-item">
              <h3>¿Qué métodos de pago aceptan?</h3>
              <p>Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos digitales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
