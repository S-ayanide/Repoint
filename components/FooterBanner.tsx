import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { Banner } from '../models/Banner';

interface IFooterBanner {
  footerBanner: Banner;
}

const FooterBanner = ({
  footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image },
}: IFooterBanner) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3 style={{ margin: '13px' }}>{largeText1}</h3>
          <h3 style={{ margin: '13px' }}>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3 style={{ margin: 0 }}>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img className="footer-banner-image" src={urlFor(image) as unknown as string} alt="product" />
      </div>
    </div>
  );
};

export default FooterBanner;
