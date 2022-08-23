import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <div>
        <Link href="/product">
          <a>Products</a>
        </Link>
      </div>
      <div>
        <Link href="/docs">
          <a>Docs</a>
        </Link>
      </div>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default Home;
