import Head from "next/head";
import { useQuery } from "urql";
import Product from "../components/Product";
import { PRODUCT_QUERY } from "../lib/query";
import { Gallery } from "../styles/Gallery";

export default function Home() {
  // Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  // Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Muimbaji Shop</title>
        <meta name="description" content="Shop for muimbaji branded items" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-16">
        <Gallery>
          {products.map((product) => (
            <Product key={product.attributes.Slug} product={product} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}
