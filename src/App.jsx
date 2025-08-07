import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import Productos from './pages/Productos/Productos';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Contacto from './pages/Contacto/Contacto';
import Carrito from './pages/Carrito/Carrito';
import Usuario from './pages/Usuario/Usuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/producto-detalle" element={<ProductoDetalle />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/usuario" element={<Usuario />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
