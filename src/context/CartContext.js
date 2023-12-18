import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigation } from '../context/Navigation';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { currentPath } = useNavigation();
    const [viewType, setViewType] = useState('/cart');

    useEffect(() => {
      if (currentPath === '/cart') {
          setViewType('/cart');
      } else {
          setViewType('/order');
      }
  }, [currentPath]);

    const addToCart = (item) => {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        setCartItems(cartItems.map(
          cartItem => cartItem.id === item.id 
          ? {...cartItem, quantity: item.quantity } 
          : cartItem 
        ))
      } else {
        const newItem = { ...item, quantity: item.quantity || 1 };
        setCartItems([...cartItems, newItem]);
      }
    };

    const incrementQuantity = (itemId) => {
      setCartItems(cartItems.map(item => 
        item.id === itemId 
        ? {...item, quantity: item.quantity + 1 }
        : item));
    }

    const decrementQuantity = (itemId) => {
      setCartItems(cartItems.map(item => 
        item.id === itemId 
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
      ));
    }
  
    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter(item => item.id !== itemId));
    };
  
    const clearCart = () => {
      setCartItems([]);
    };

    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const [total, setTotal] = useState(calculateSubtotal());
    const [coupon, setCoupon] = useState('');

  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, 
          viewType, calculateSubtotal, total, setTotal, coupon, setCoupon }}>
        {children}
      </CartContext.Provider>
    );
};
  