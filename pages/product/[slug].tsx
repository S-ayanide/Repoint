/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { Product as ProductComponent } from '../../components';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../models/Products';

interface IProductDetail {
  product: Product;
  products: Product[];
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  // Get the indivial Product
  const product: Product = await client.fetch(query);
  // Get all the products
  const products: Product[] = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

const ProductDetails = ({ product, products }: IProductDetail) => {
  const { image, name, details, price } = product;
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0]) as unknown as string} alt="" />
          </div>
          {/* <div className="small-image-container">
            {image?.map((item, i) => (
              <img key={item} src={urlFor(item) as unknown as string} alt="Item" />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">₹{price}</p>
          <div className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => void 0}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick={() => void 0}>
                0
              </span>
              <span className="plus" onClick={() => void 0}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => void 0}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={() => void 0}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <ProductComponent key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
