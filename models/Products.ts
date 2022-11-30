interface Slug {
  current: string;
}

export interface Product {
  _id: string;
  image: Array<string>;
  name: string;
  slug: Slug;
  price: number;
  details: string;
}