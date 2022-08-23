// ! STATIC SITE GENERATION (SSG)

import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Post List</h1>
      {posts.map((post, idx) => (
        <div key={idx}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <h2>
                {post.id} - {post.title}
              </h2>
            </a>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;

/** @type {import('next').GetStaticProps} */
export const getStaticProps = async () => {
  const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
  return { props: { posts: posts.slice(0, 3) } };
};
