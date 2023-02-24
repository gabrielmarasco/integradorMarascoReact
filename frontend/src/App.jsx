import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../public/css/index.css';
import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/'}>
          <h2>CONCESIONARIA</h2>
        </Link>
      </header>
      <main>
        <h1>List products</h1>
        {data.products.map((product) => (
          <div>
            <img src={product.img} alt={product.model} />
            <h3>
              {product.marc} {product.model}
            </h3>
            <p>{product.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
