import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.scss";
import App from './App.jsx' 
import { Routes } from "react-router"


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
