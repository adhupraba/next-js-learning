// ! STATIC

import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Next js pre-rendering</h1>
      <div>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </div>
      <div>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <div>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
