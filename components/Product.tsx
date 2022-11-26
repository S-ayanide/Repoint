import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { Product as ProductModel } from '../models/Products';

interface IProduct {
  product: ProductModel;
}

const Product = ({ product: { image, name, slug, price } }: IProduct) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]) as unknown as string}
            width={250}
            height={250}
            className="product-image"
            alt={name}
          />
          <br />
          <br />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
