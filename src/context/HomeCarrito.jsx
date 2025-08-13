import React, { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

// estado inicial sin nada
const initialState = {
  items: [],
  total: 0,
  cantidadTotal: 0
};

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const productoExistente = state.items.find(
        item => item.id === action.payload.id
      );

      if (productoExistente) {
        const cantidadAAgregar = action.payload.cantidad || 1;
        const itemsActualizados = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + cantidadAAgregar }
            : item
        );
        return {
          ...state,
          items: itemsActualizados,
          total: state.total + (action.payload.price * cantidadAAgregar),
          cantidadTotal: state.cantidadTotal + cantidadAAgregar
        };
      } else {
        // si es un producto nuevo, agregarlo al carrito
        const cantidadAAgregar = action.payload.cantidad || 1;
        return {
          ...state,
          items: [...state.items, { ...action.payload, cantidad: cantidadAAgregar }],
          total: state.total + (action.payload.price * cantidadAAgregar),
          cantidadTotal: state.cantidadTotal + cantidadAAgregar
        };
      }

    case 'ELIMINAR_PRODUCTO':
      const productoAEliminar = state.items.find(
        item => item.id === action.payload
      );
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (productoAEliminar.price * productoAEliminar.cantidad),
        cantidadTotal: state.cantidadTotal - productoAEliminar.cantidad
      };

    case 'VACIAR_CARRITO':
      return initialState;

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: producto });
  };

  const eliminarDelCarrito = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', payload: id });
  };

  const vaciarCarrito = () => {
    dispatch({ type: 'VACIAR_CARRITO' });
  };

  return (
    <CarritoContext.Provider value={{
      ...state,
      agregarAlCarrito,
      eliminarDelCarrito,
      vaciarCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  );
};
export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de CarritoProvider');
  }
  return context;
};
