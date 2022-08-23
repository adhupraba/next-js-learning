// ! INCREMENTAL STATIC REGENERATION (ISR)

import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, idx) => (
        <div key={idx}>
          <Link href={`/products/${product.id}`}>
            <a>
              <h2>
                {product.id} - {product.title} - {product.price}
              </h2>
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

/** @type {import('next').GetStaticProps} */
export const getStaticProps = async () => {
  console.log("generating / re-generating product list page");
  const products = await (await fetch("http://localhost:4000/products")).json();
  return { props: { products }, revalidate: 10 };
};
