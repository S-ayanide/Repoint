import React from 'react';
import { FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <div>
      <HeroBanner />

      <div className="products-heading">
        <h2>Black Friday Top Picks</h2>
        <p>From the biggest designer brands, to the best of luxury and hidden gems.</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product) => product)}
      </div>

      <FooterBanner />
    </div>
  );
};

export default Home;
