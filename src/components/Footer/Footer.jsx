import './Footer.css';
import logoFacebook from '../../assets/logoFace.png';
import logoTwitter from '../../assets/logoTwe.png';
import logoInstagram from '../../assets/logoInst.png';
import logoYoutube from '../../assets/logoYou.png';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>Copyright© 1995-2025 Samsung. Todos los derechos reservados.</p>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="https://www.samsung.com/ar/function/ipredirection/ipredirectionLocalList/" className= "idioma">Argentina/Español</a>
          <a href="https://www.samsung.com/ar/privacy/"  className="normal">Privacidad</a>
          <a href="https://www.samsung.com/ar/privacy/"  className="normal">Cookies</a>
          <a href="https://www.samsung.com/ar/info/legal/"  className="normal">Legales</a>
          <a href="https://www.samsung.com/ar/info/sitemap/"  className="normal">Mapa del Sitio</a>
        </div>
        <div className="footer-social">
          <span>¡Mantente informado!</span>
          <a href="https://www.facebook.com/SamsungArgentina">
            <img src={logoFacebook} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com/SamsungArg">
            <img src={logoTwitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/SamsungArgentina">
            <img src={logoInstagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/user/SamsungArgentina?&ab_channel=SamsungArgentina">
            <img src={logoYoutube} alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;