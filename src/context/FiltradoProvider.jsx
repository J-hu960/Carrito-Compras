/* eslint-disable react/prop-types */
import { products } from '../mocks/productos.json';
import { createContext } from 'react';
import { useState, useEffect } from 'react';

const FiltradoContext = createContext();

const FiltradoProvider = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [productos, setProductos] = useState(products);
  const [categoria, setCategoria] = useState('');

  function handleChange() {
    const filteredProd = products.filter(
      (producto) => producto.price >= minPrice && (producto.category === categoria || categoria === '')
    );
    setProductos(filteredProd);
  }

  useEffect(() => {
    handleChange();
  }, [minPrice, categoria]);

  return (
    <FiltradoContext.Provider
      value={{
        minPrice,
        setCategoria,
        setMinPrice,
        categoria,
        productos
      }}
    >
      {children}
    </FiltradoContext.Provider>
  );
};

export { FiltradoProvider };
export default FiltradoContext;
