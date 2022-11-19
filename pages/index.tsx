import React from 'react';

const Home = () => {
  return (
    <div>
      <span>Hero Banner</span>

      <div className="products-heading">
        <h2>Black Friday Top Picks</h2>
        <p>From the biggest designer brands, to the best of luxury and hidden gems.</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2', 'Product 3', 'Product 4'].map((product) => product)}
      </div>

      <span>Footer</span>
    </div>
  );
};

export default Home;
