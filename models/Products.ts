interface Slug {
  current: string;
}

export interface Product {
  _id: string;
  image: Array<string>;
  quantity: number;
  name: string;
  slug: Slug;
  price: number;
  details: string;
}
