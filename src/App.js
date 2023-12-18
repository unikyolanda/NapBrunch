import React from 'react';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { FavoriteProvider } from './context/Favorite';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import FrontPage from './pages/FrontPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';
import ConfirmPage from './pages/ConfirmPage';
import FinishPage from './pages/FinishPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import FavotitePage from './pages/FavoritePage';

function App() { 
    return (
        <CartProvider>
            <FavoriteProvider>
            <div>
                <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-800 to-green-700 opacity-95 z-20">
                    <Sidebar />
                </div>
                <div className='-mt-16'>
                    <Route path="/">
                        <FrontPage />
                    </Route>
                    <Route path="/menu">
                        <MenuPage />
                    </Route>
                    <Route path="/product/:id">
                        <ProductPage />
                    </Route>
                    <Route path="/cart">
                        <CartPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/favorite">
                        <FavotitePage />
                    </Route>
                    <OrderProvider>
                        <Route path="/order">
                            <OrderPage />
                        </Route>
                        <Route path="/confirm">
                            <ConfirmPage />
                        </Route>
                        <Route path="/finish">
                            <FinishPage />
                        </Route>
                    </OrderProvider>
                </div>
                <Footer />
            </div>
            </FavoriteProvider>
        </CartProvider>
    );
}

export default App;