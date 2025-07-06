import React, { useState } from 'react'
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import CartSidebar from './components/CartSidebar';
import CartItem from './components/CartItem';
import { Provider } from 'react-redux';
import { store } from './store/store';


export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <Provider store={store}>
      <Header onToggleCart={toggleCart} />
      <ProductGrid/>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
  </Provider>
  )
}
