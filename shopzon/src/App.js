import React from 'react';
import './App.css';
import Product from './components/Product'

function App() {
    
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

  return ( 
    <browserRouter>

    <div className="app-structure">
      <header>
        <div className="navigation name">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <b>Shopzon</b>
        </div>
        <div className="navigation search">
            <input className="search1" type="search" placeholder="search" ></input>
        </div>
        <div className="navigation cart">
            <ul>
                <li>Cart</li>
                <li>Sign in</li>
            </ul>
        </div>
      </header>

      <aside className="sidebar">
        <h2>SHOP BY CATEGORY</h2>
           <button onClick={closeMenu}>x</button>
              <div>
                <a herf="index.html">pants</a> 
                <br></br>
                <a herf="index.html">shirts</a>
              </div>
      </aside>

      <main>
          
          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" /> 

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" />

          <Product className="product1" 
                   image="/images/im1.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.5 stars(15 reviews)" price="Rs.999" /> 
      </main>

      <footer>All Rights Reserved</footer>

    </div>

    </browserRouter>
  );
}

export default App;
