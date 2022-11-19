import React from 'react';
import { FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';
import { Banner } from '../models/Banner';
import { Product } from '../models/Products';

interface IHome {
  products: Product[];
  banner: Banner[];
}

const Home = ({ products, banner }: IHome) => {
  console.log(banner);
  return (
    <div>
      <HeroBanner heroBanner={banner[0]} />

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

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products: Product[] = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banner: Banner = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      banner,
    },
  };
};

export default Home;
