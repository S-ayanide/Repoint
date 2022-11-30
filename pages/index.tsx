import React from 'react';
import { FooterBanner, HeroBanner, Product } from '../components';
import { client } from '../lib/client';
import { Banner } from '../models/Banner';
import { Product as ProductModel } from '../models/Products';

interface IHome {
  products: ProductModel[];
  banner: Banner[];
}

const Home = ({ products, banner }: IHome) => {
  return (
    <div>
      <HeroBanner heroBanner={banner[0]} />

      <div className="products-heading">
        <h2>Black Friday Top Picks</h2>
        <br />
        <p>From the biggest designer brands, to the best of luxury and hidden gems.</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products: ProductModel[] = await client.fetch(productsQuery);

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
