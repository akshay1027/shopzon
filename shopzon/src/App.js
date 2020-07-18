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
                   rating="4.5 stars(15 reviews)" price="Rs.2999" />

          <Product className="product1" 
                   image="/images/im5.jpg" al="pant" name="Levis" desc="Men's fit pant" 
                   rating="4.7 stars(15 reviews)" price="Rs.1999" />

          <Product className="product1" 
                   image="/images/img6.jpg" al="pant" name="Levis" desc="Men's fit trousers" 
                   rating="4.3 stars(15 reviews)" price="Rs.599" />

          <Product className="product1" 
                   image="/images/im2.jpg" al="pant" name="Levis" desc="Men's fit jeans pant" 
                   rating="3.5 stars(15 reviews)" price="Rs.899" /> 

          <Product className="product1" 
                   image="/images/im3.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.8 stars(15 reviews)" price="Rs.2999" />

          <Product className="product1" 
                   image="/images/im4.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.9 stars(15 reviews)" price="Rs.559" />

          <Product className="product1" 
                   image="/images/im5.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.1 stars(15 reviews)" price="Rs.1349" />

          <Product className="product1" 
                   image="/images/img6.jpg" al="pant" name="Levis" desc="Men's fit denim pant" 
                   rating="4.7 stars(15 reviews)" price="Rs.999" /> 
      </main>

      <footer>All Rights Reserved</footer>

    </div>

    </browserRouter>
  );
}

export default App;
