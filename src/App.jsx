import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/HomeCarrito';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import ProductoDetalle from './pages/ProductoDetalle/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos/QuienesSomos';
import Contacto from './pages/Contacto/Contacto';
import Carrito from './pages/Carrito/Carrito';
import Usuario from './pages/Usuario/Usuario';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto-detalle/:id" element={<ProductoDetalle />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/usuario" element={<Usuario />} />
          </Route>
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
