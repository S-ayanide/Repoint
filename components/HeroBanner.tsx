import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { Banner } from '../models/Banner';

interface IHeroBanner {
  heroBanner: Banner;
}

const HeroBanner = ({ heroBanner }: IHeroBanner) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <img src={urlFor(heroBanner.image) as unknown as string} alt="watch" className="hero-banner-image" />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
