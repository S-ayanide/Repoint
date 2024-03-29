import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
