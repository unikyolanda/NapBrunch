import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();
export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = (item) => {
    if (!favorites.some(favorite => favorite.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorite = (itemId) => {
    setFavorites(favorites.filter(favorite => favorite.id !== itemId));
  };

  const isFavorited = (itemId) => {
    return favorites.some(favorite => favorite.id === itemId);
};

return (
    <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFromFavorite, isFavorited }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;