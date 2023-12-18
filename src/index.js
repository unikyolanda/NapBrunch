import './index.css';
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import { NavigationProvider } from "./context/Navigation.js";
 
const el = document.getElementById('root');
const root = createRoot(el);
 
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);