import React from 'react'
// import logo from './logo.svg';
import './App.css';
// import NavBar from './components/NavBar/NavBar'
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Footer from './components/Footer/Footer';
import Rutas from './routes/Rutas';
import CartContext, { GlobalContext } from './components/CartContext/CartContext';


function App() {
  return (
    <div className="App">
      <CartContext>
        <Rutas />
      </CartContext>

    </div>
  );
}

export default App;