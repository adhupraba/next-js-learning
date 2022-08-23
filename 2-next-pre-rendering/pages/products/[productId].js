// ! INCREMENTAL STATIC REGENERATION (ISR)

import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>id - {product.id}</h1>
      <h1>title - {product.title}</h1>
      <h3>price - {product.price}</h3>
      <h3>description - {product.description}</h3>
    </div>
  );
};

export default Product;

/** @type {import('next').GetStaticPaths} */
export const getStaticPaths = async () => {
  // const products = await (await fetch("http://localhost:4000/products")).json();
  // const paths = products.map((product) => ({ params: { productId: `${product.id}` } }));

  // const paths = [{ params: { productId: "1" } }, { params: { productId: "2" } }, { params: { productId: "3" } }];
  const paths = ["1"].map((num) => ({ params: { productId: num } }));

  return {
    paths,
    fallback: true,
  };
};

/** @type {import('next').GetStaticProps} */
export const getStaticProps = async (context) => {
  const { params } = context;
  const product = await (await fetch(`http://localhost:4000/products/${params.productId}`)).json();

  console.log(`generating page for /products/${params.productId}`);

  return { props: { product }, revalidate: 10 };
};
